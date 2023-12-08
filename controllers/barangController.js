import BarangModel from '../models/barangModel.js'

class BarangController {
    static async getBarang(req, res) {
        try {
            const data = await BarangModel.getBarang()
            res.json(data)
        } catch (error) {
            res.send(error.message)
        }
    }
}

export default BarangController