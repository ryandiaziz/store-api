// const jwt = require("jsonwebtoken")
import jwt from 'jsonwebtoken'
const screetCode = process.env.SECRET_CODE

const tokenGenerator = (data) => {
    const { id, name, email } = data;
    return jwt.sign({
        id: id,
        name: name,
        email: email,
    }, screetCode);
};

const tokenVerifier = (data) => {
    return jwt.verify(data, screetCode)

}

export {
    tokenGenerator,
    tokenVerifier,
}