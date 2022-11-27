const createReqUrlMiddleware = (baseUrl) => {
    return (req, res) => {
        const url = new URL(`${baseUrl}${req.url}`)
        req.url = url
    }
}

module.exports = createReqUrlMiddleware
