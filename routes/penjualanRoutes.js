import express from 'express'
const penjualanRoute = express.Router()

penjualanRoute.get('/', (req, res) => {
    res.send('penjualan route')
})

export default penjualanRoute