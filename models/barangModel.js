import client from "../connection.js"
import { generateID, generateDate } from "../helper/generateData.js"

class BarangModel {
    static async getBarang() {
        try {
            const res = await client.query('select * from barang')
            return res.rows
        } catch (error) {
            throw (error)
        }
    }

    static async addBarang(nama, harga) {
        try {
            const id = generateID()
            const createdAt = generateDate()
            const updatedAt = createdAt

            await client.query(`insert into barang(id,nama,harga,createdAt,updatedat) values('${id}','${nama}','${harga}','${createdAt}','${updatedAt}')`)

            return 'successfully added item'
        } catch (error) {
            throw (error)
        }
    }

    static async deleteBarang(id) {
        try {
            await client.query(`delete from barang where id='${id}'`)
            return 'successfully deleted item'
        } catch (error) {
            throw (error)
        }
    }
}

export default BarangModel