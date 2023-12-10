import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
const secretCode = process.env.SECRET_CODE

const tokenGenerator = (data) => {
    const { id, nama, email } = data
    return jwt.sign({
        id,
        nama,
        email,
    }, secretCode)
};

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)

}

export {
    tokenGenerator,
    tokenVerifier,
}