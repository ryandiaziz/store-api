import express from 'express'
import BarangController from '../controllers/barangController.js'
const barangRoute = express.Router()

barangRoute.get('/', BarangController.getBarang)

export default barangRoute