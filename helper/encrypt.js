// const bcrypt = require('bcrypt')
import bcrypt from 'bcrypt'
const salt = +process.env.SALT_ROUND

const encryptPwd = data => {
    return bcrypt.hashSync(String(data), salt)
}

const decryptPwd = (data, hashPwd) => {
    return bcrypt.compareSync(String(data), hashPwd)
}

export {
    encryptPwd,
    decryptPwd
}