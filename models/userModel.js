import pool from "../connection.js"
import { encryptPwd } from "../helper/encrypt.js"
import { generateID } from "../helper/generateData.js"

class UserModel {
    static async createuser(nama, email, password) {
        try {
            const id = generateID()
            const encryptPass = encryptPwd(password)

            const query = {
                text: 'INSERT INTO userdata(id, nama, email, password) VALUES($1, $2, $3, $4)',
                values: [id, nama, email, encryptPass]
            }

            await pool.query(query)

            return 'successfully created user'
        } catch (error) {
            throw (error)
        }
    }

    static async getusers() {
        try {
            const data = await pool.query('SELECT * FROM userdata')
            return data.rows
        } catch (error) {
            throw (error)
        }
    }

    static async getOneUser(email) {
        try {
            const query = {
                text: 'SELECT * FROM userdata WHERE email = $1',
                values: [email]
            }

            const data = await pool.query(query)
            return data.rows
        } catch (error) {
            throw (error)
        }
    }
}

export default UserModel