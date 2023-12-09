import { tokenGenerator } from "../helper/jsonWebToken.js";
import { decryptPwd } from "../helper/encrypt.js";
import UserModel from '../models/userModel.js'

class UserController {
    static async getUsers(req, res) {
        try {
            const data = await UserModel.getusers()
            res.json({
                status: true,
                data
            })
        } catch (err) {
            res.json({
                status: false,
                message: err.message
            })
        }
    }

    static async createUser(req, res) {
        try {
            const { nama, email, password } = req.body
            const message = await UserModel.createuser(nama, email, password)
            res.json({
                status: true,
                message
            })
        } catch (err) {
            res.json({
                status: false,
                message: err.message
            })
        }
    }

    static async login(req, res) {
        try {
            // const { email, password } = req.body
            // let account = await user.findOne({ where: { email: email } })

            // if (account) {
            //     if (decryptPwd(password, account.password)) {
            //         let access_token = tokenGenerator(account)
            //         res.status(200).json({
            //             status: "ok",
            //             access_token: access_token,
            //         });
            //     } else {
            //         res.status(403).json({
            //             status: "error",
            //             message: "invalid password"
            //         })
            //     }
            // } else {
            //     res.status(404).json({
            //         status: "error",
            //         message: "User not found"
            //     })
            // }
        } catch (err) {
            // res.status(500).json({
            //     status: "error",
            //     message: err.message
            // })
        }
    }

    static async getAccount(req, res) {
        try {

        } catch (err) {

        }
    }

}

export default UserController