import express from 'express'
import PenjualanController from '../controllers/penjualanController.js'
import auth from '../middleware/auth.js'

const penjualanRoute = express.Router()

penjualanRoute.get('/', auth, PenjualanController.getAllPenjualan)
penjualanRoute.get('/filter', auth, PenjualanController.getPenjualanByDate)
penjualanRoute.get('/:id', auth, PenjualanController.getPenjualanById)
penjualanRoute.post('/', auth, PenjualanController.addPenjualan)
penjualanRoute.delete('/:id', auth, PenjualanController.deletePenjualan)

export default penjualanRoute