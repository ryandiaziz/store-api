import BarangModel from '../models/barangModel.js'

class BarangController {
    static async getBarang(req, res) {
        try {
            const data = await BarangModel.getBarang()
            res.json({
                status: true,
                data
            })
        } catch (error) {
            res.json({
                status: false,
                message: error.message
            })
        }
    }

    static async addBarang(req, res) {
        try {
            const { nama, harga } = req.body
            const response = await BarangModel.addBarang(nama, harga)
            res.json({
                status: true,
                data: response
            })
        } catch (error) {
            res.json({
                status: false,
                message: error.message
            })
        }
    }

    static async deleteBarang(req, res) {
        try {
            const { id } = req.params
            const response = await BarangModel.deleteBarang(id)
            res.json({
                status: true,
                message: response
            })
        } catch (error) {
            res.json({
                status: false,
                message: error.message
            })
        }
    }
}

export default BarangController