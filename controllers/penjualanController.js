import PenjualanModel from "../models/penjualanModel.js"

class PenjualanController {
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