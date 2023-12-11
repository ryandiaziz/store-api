import PenjualanModel from "../models/penjualanModel.js"

class PenjualanController {
    static async getPenjualanByDate(req, res) {
        try {
            const { from, to, pageSize, page } = req.query
            const result = await PenjualanModel.getPenjualanByDate(from, to, pageSize, page)
            res.json({
                status: true,
                data: result
            })
        } catch (error) {
            res.json({
                status: false,
                message: error.message
            })
        }
    }

    static async getAllPenjualan(req, res) {
        try {
            const result = await PenjualanModel.getAllPenjualan()
            res.json({
                status: true,
                data: result
            })
        } catch (error) {
            res.json({
                status: false,
                message: error.message
            })
        }
    }

    static async deletePenjualan(req, res) {
        try {
            const { id } = req.params
            const result = await PenjualanModel.deletePenjualan(id)
            res.json({
                status: true,
                message: result
            })
        } catch (error) {
            res.json({
                status: false,
                message: error.message
            })
        }
    }

    static async getPenjualanById(req, res) {
        try {
            const { id } = req.params
            const result = await PenjualanModel.getPenjualanById(id)
            res.json({
                status: true,
                data: result
            })
        } catch (error) {
            res.json({
                status: false,
                message: error.message
            })
        }
    }

    static async addPenjualan(req, res) {
        try {
            const { barang, nama_pembeli, hp_pembeli } = req.body
            const result = await PenjualanModel.addPenjualan(barang, nama_pembeli, hp_pembeli)
            res.json({
                status: true,
                data: result
            })
        } catch (error) {
            res.json({
                status: false,
                message: error.message
            })
        }
    }
}

export default PenjualanController