import client from "../connection.js"

class BarangModel {
    static async getBarang() {
        try {
            const res = await client.query('Select * from barang')
            return res.rows
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default BarangModel