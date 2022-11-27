class Router {
    handlersMap = { }

    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    get(path, handler) {
        this._request(path, 'GET', handler)
    }

    post(path, handler) {
        this._request(path, 'POST', handler)
    }

    put(path, handler) {
        this._request(path, 'PUT', handler)
    }

    update(path, handler) {
        this._request(path, 'UPDATE', handler)
    }

    delete(path, handler) {
        this._request(path, 'DELETE', handler)
    }

    _request(path, method, handler) {
        const reqPath = this.baseUrl + path
        this.handlersMap[reqPath] = this.handlersMap[reqPath] || { }
        this.handlersMap[reqPath][method] = handler
    }
}

module.exports = Router
