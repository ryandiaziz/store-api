const validateEmail = (email) => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

const validateUserInput = ({ nama, email, password }) => {
    if (!nama) {
        throw new Error("nama cannot be empty")
    }
    if (!email) {
        throw new Error("email cannot be empty")
    }
    if (!password) {
        throw new Error("password cannot be empty")
    }
    if (!validateEmail(email)) {
        throw new Error("invalid email")
    }
}

export {
    validateUserInput,
}