import pool from "../connection.js"
import { generateDate, filterData } from "../helper/generateData.js"
import BarangModel from "./barangModel.js"

class PenjualanModel {
    static async getPenjualanByDate(from, to, pageSize, page) {
        try {
            const offset = (+page - 1) * (+pageSize)
            const query = {
                text: 'SELECT p.penjualan_id, p.tanggal_penjualan, p.nama_pembeli, p.hp_pembeli, p.total, b.barang_id, b.nama_barang, b.harga_barang FROM penjualan p JOIN penjualan_barang pb ON p.penjualan_id = pb.penjualan_id JOIN barang b ON pb.barang_id = b.barang_id WHERE p.tanggal_penjualan BETWEEN $1 AND $2 ORDER BY p.tanggal_penjualan, p.penjualan_id LIMIT $3 OFFSET $4',
                values: [from, to, +pageSize, offset]
            }
            const result = await pool.query(query)
            return filterData(result.rows)
        } catch (error) {
            throw (error)
        }
    }

    static async getAllPenjualan() {
        try {
            const result = await pool.query('SELECT p.penjualan_id, p.tanggal_penjualan, p.nama_pembeli, p.hp_pembeli, p.total, b.barang_id, b.nama_barang, b.harga_barang FROM penjualan p JOIN penjualan_barang pb ON p.penjualan_id = pb.penjualan_id JOIN barang b ON pb.barang_id = b.barang_id')
            return filterData(result.rows)
        } catch (error) {
            throw (error)
        }
    }

    static async deletePenjualan(id) {
        try {
            await pool.query('DELETE FROM penjualan_barang WHERE penjualan_id = $1', [id])
            await pool.query('DELETE FROM penjualan WHERE penjualan_id = $1', [id])
            return 'successfully deleted'
        } catch (error) {
            throw (error)
        }
    }

    static async getPenjualanById(id) {
        try {
            const result = await pool.query('SELECT p.penjualan_id, p.tanggal_penjualan, p.nama_pembeli, p.hp_pembeli, p.total, b.barang_id, b.nama_barang, b.harga_barang FROM penjualan p JOIN penjualan_barang pb ON p.penjualan_id = pb.penjualan_id JOIN barang b ON pb.barang_id = b.barang_id WHERE p.penjualan_id = $1', [id])
            return filterData(result.rows)
        } catch (error) {
            throw (error)
        }
    }

    static async addPenjualan(barang, nama_pembeli, hp_pembeli) {
        try {
            const promisesBarang = barang.map(id => {
                return BarangModel.getBarangById(id)
            })
            const dataBarang = await Promise.all(promisesBarang)
            const total = dataBarang.reduce((prev, current) => {
                return prev + (+current.harga_barang)
            }, 0)
            const tanggal_penjualan = generateDate()

            const queryPenjualan = {
                text: 'INSERT INTO penjualan(penjualan_id, tanggal_penjualan, nama_pembeli, hp_pembeli, total) VALUES(DEFAULT, $1, $2, $3, $4) RETURNING *',
                values: [tanggal_penjualan, nama_pembeli, hp_pembeli, total]
            }
            const res = await pool.query(queryPenjualan)

            const promisesJunction = barang.map(id => {
                return pool.query('INSERT INTO penjualan_barang(penjualan_id, barang_id) VALUES($1, $2)', [res.rows[0].penjualan_id, id])
            })
            await Promise.all(promisesJunction)

            return 'successfully added'

        } catch (error) {
            throw (error)
        }
    }
}

export default PenjualanModel