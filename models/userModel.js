import pool from "../connection.js"
import { encryptPwd } from "../helper/encrypt.js"
import { generateID } from "../helper/generateData.js"

class UserModel {
    static async createuser(nama, email, password) {
        try {
            const emailCheck = await this.getOneUser(email)
            if (emailCheck.length) {
                throw new Error("email is already in use")
            }
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

    static async getusers(pageSize = 0, page = 1) {
        try {
            const queryDefault = {
                text: 'SELECT * FROM userdata'
            }
            const queryPagination = {
                text: 'SELECT * FROM userdata LIMIT $1 OFFSET $2',
                values: [pageSize, ((page - 1) * pageSize)]
            }

            const query = +pageSize === 0 ? queryDefault : queryPagination

            const data = await pool.query(query)
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