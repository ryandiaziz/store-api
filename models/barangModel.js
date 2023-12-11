import pool from "../connection.js"
import { generateID } from "../helper/generateData.js"

class BarangModel {
    static async getBarang() {
        try {
            const res = await pool.query('SELECT * FROM barang')
            return res.rows
        } catch (error) {
            throw (error)
        }
    }

    static async getBarangById(id) {
        try {
            const res = await pool.query('SELECT * FROM barang WHERE barang_id = $1', [id])
            return res.rows[0]
        } catch (error) {
            throw (error)
        }
    }

    static async addBarang(nama, harga) {
        try {
            const id = generateID()

            const query = {
                text: 'INSERT INTO barang(barang_id, nama_barang, harga_barang) VALUES(DEFAULT,$1,$2) RETURNING *',
                values: [nama, harga]
            }

            const data = await pool.query(query)

            return data.rows
        } catch (error) {
            throw (error)
        }
    }

    static async deleteBarang(id) {
        try {
            const query = {
                text: 'DELETE FROM barang WHERE barang_id=$1',
                values: [id]
            }

            await pool.query(query)

            return 'successfully deleted'
        } catch (error) {
            throw (error)
        }
    }

    static async updateBarang(id, nama, harga) {
        try {
            const query = {
                text: 'UPDATE barang SET nama_barang = $1, harga_barang = $2 WHERE barang_id = $3 RETURNING *',
                values: [nama, harga, id]
            }

            const res = await pool.query(query)

            return res.rows
        } catch (error) {
            throw (error)
        }
    }
}

export default BarangModel