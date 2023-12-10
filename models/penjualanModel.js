import client from "../connection.js"
import { generateDate } from "../helper/generateData.js"
import BarangModel from "./barangModel.js"

class PenjualanModel {
    static async getPenjualanById(id) {
        try {
            const result = await client.query('SELECT p.penjualan_id, p.penjualan_date, p.total_amount, b.barang_id, b.barang_nama FROM penjualan p JOIN penjualan_barang pb ON p.penjualan_id = pb.penjualan_id JOIN barang b ON pb.barang_id = b.barang_id WHERE p.penjualan_id = $1', [id])

            return result.rows
        } catch (error) {
            throw (error)
        }
    }

    static async addPenjualan(barang) {
        try {
            const promisesBarang = barang.map(id => {
                return BarangModel.getBarangById(id)
            })
            const dataBarang = await Promise.all(promisesBarang)
            const total_amount = dataBarang.reduce((prev, current) => {
                return prev + (+current.barang_harga)
            }, 0)
            const penjualan_date = generateDate()

            const queryPenjualan = {
                text: 'INSERT INTO penjualan(penjualan_id, penjualan_date, total_amount) VALUES(DEFAULT, $1, $2) RETURNING *',
                values: [penjualan_date, total_amount]
            }
            const res = await client.query(queryPenjualan)
            // return res.rows
            const promisesJunction = barang.map(id => {
                return client.query('INSERT INTO penjualan_barang(penjualan_id, barang_id) VALUES($1, $2)', [res.rows[0].penjualan_id, id])
            })
            await Promise.all(promisesJunction)

        } catch (error) {
            throw (error)
        }
    }
}

export default PenjualanModel