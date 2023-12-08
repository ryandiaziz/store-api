import express from 'express'
import barangRoute from './barangRoutes.js'
import penjualanRoute from './penjualanRoutes.js'
const route = express.Router()

route.get('/', (req, res) => {
    res.send("Welcome")
})

route.use('/barang', barangRoute)
route.use('/penjualan', penjualanRoute)



export default route