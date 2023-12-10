import client from "../connection.js"
import { generateID, generateDate } from "../helper/generateData.js"

class BarangModel {
    static async getBarang() {
        try {
            const res = await client.query('SELECT * FROM barang')
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

            const query = {
                text: 'INSERT INTO barang(id, nama, harga, createdAt, updatedat) VALUES($1,$2,$3,$4,$5) RETURNING *',
                values: [id, nama, harga, createdAt, updatedAt]
            }

            const data = await client.query(query)

            return data.rows
        } catch (error) {
            throw (error)
        }
    }

    static async deleteBarang(id) {
        try {
            const query = {
                text: 'DELETE FROM barang WHERE id=$1',
                values: [id]
            }

            await client.query(query)

            return 'successfully deleted item'
        } catch (error) {
            throw (error)
        }
    }
}

export default BarangModel