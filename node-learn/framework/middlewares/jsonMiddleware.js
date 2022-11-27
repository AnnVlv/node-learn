const jsonMiddleware = (req, res) => {
    res.json = (data) => {
        res.writeHead(200, {
            'Content-type': 'application/json',
        })

        return res.end(JSON.stringify(data))
    }
}

module.exports = jsonMiddleware
