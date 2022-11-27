const http = require('http')
const { EventEmitter } = require('stream')


class Application {
    _server
    _emitter = new EventEmitter()
    _middlewares = []

    constructor() {
        this._server = http.createServer((req, res) => {
            let reqData = ''
            req.on('data', data => {
                reqData += data
            })
            req.on('end', () => {
                if (reqData) {
                    req.body = JSON.parse(reqData)
                }

                this._middlewares.forEach(middleware => {
                    middleware(req, res)
                })

                const requestEmitted = this._emitter.emit(
                    Application.getRequestEventString(req.url.pathname, req.method),
                    req, res
                )
                if (!requestEmitted) {
                    res.end('null')
                }
            })
        })
    }

    static getRequestEventString(url, method) {
        return `${url}/${method}`
    }

    listen(port, listener) {
        this._server.listen(port, listener)
    }

    addRouter(router) {
        const handlersMap = router.handlersMap
        Object.keys(handlersMap).forEach(path => {
            const pathHandlersMap = handlersMap[path]
            Object.keys(pathHandlersMap).forEach(method => {
                const handler = pathHandlersMap[method]
                this._emitter.on(Application.getRequestEventString(path, method), (...args) => {
                    handler(...args)
                })
            })
        })
    }

    addMiddleware(middleware) {
        this._middlewares.push(middleware)
    }
}

module.exports = Application
