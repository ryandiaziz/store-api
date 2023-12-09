import express from 'express'
import BarangController from '../controllers/barangController.js'
const barangRoute = express.Router()

barangRoute.get('/', BarangController.getBarang)
barangRoute.post('/', BarangController.addBarang)
barangRoute.delete('/:id', BarangController.deleteBarang)

export default barangRoute