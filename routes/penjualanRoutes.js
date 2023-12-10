import express from 'express'
import PenjualanController from '../controllers/penjualanController.js'
import auth from '../middleware/auth.js'

const penjualanRoute = express.Router()

penjualanRoute.get('/:id', auth, PenjualanController.getPenjualanById)
penjualanRoute.post('/', auth, PenjualanController.addPenjualan)

export default penjualanRoute