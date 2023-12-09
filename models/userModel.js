import client from "../connection.js"
import { encryptPwd } from "../helper/encrypt.js"
import { generateID } from "../helper/generateData.js"

class UserModel {
    static async createuser(nama, email, password) {
        try {
            const id = generateID()
            const encryptPass = encryptPwd(password)

            await client.query(`insert into userdata(id,nama,email,password) values('${id}','${nama}','${email}','${encryptPass}')`)

            return 'successfully created user'
        } catch (error) {
            throw (error)
        }
    }

    static async getusers() {
        try {
            const data = await client.query('select * from userdata')
            return data.rows
        } catch (error) {
            throw (error)
        }
    }
}

export default UserModel