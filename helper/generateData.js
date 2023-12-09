const generateID = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

const generateDate = () => {
    return new Date().toISOString()
}

export {
    generateID,
    generateDate,
}