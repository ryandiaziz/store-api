import express from 'express'
import barangRoute from './barangRoutes.js'
import penjualanRoute from './penjualanRoutes.js'
import userRoute from './userRoutes.js'
const route = express.Router()

route.get('/', (req, res) => {
    res.json({
        info: 'Welcome'
    })
})

route.use('/user', userRoute)
route.use('/barang', barangRoute)
route.use('/penjualan', penjualanRoute)



export default route