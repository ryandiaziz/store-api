import express from 'express'
import BarangController from '../controllers/barangController.js'
import auth from '../middleware/auth.js'

const barangRoute = express.Router()

barangRoute.get('/', auth, BarangController.getBarang)
barangRoute.post('/', auth, BarangController.addBarang)
barangRoute.delete('/:id', auth, BarangController.deleteBarang)
barangRoute.put('/:id', auth, BarangController.updateBarang)

export default barangRoute