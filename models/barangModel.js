import client from "../connection.js"

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
            const createdAt = new Date().toISOString()
            const updatedAt = createdAt
            const id = `${nama}${createdAt.replace(/[^\d]/g, '')}`
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