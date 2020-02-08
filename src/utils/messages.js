const generateMessage = (username, text) => {
    const message = {
        username,
        text,
        createdAt: new Date().getTime()
    }
    return message;
}

const generateLocationMessage = (username, locationUrl) => {
    const message = {
        username,
        locationUrl,
        createdAt: new Date().getTime()
    }
    return message;
}

module.exports = {
    generateMessage, generateLocationMessage
}