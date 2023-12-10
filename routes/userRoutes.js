import express from 'express'
import UserController from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.get('/', UserController.getUsers)
userRoute.post('/', UserController.createUser)
userRoute.post('/login', UserController.login)

export default userRoute