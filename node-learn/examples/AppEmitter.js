class AppEmitter {
    listenersMap = {}

    constructor() { }

    on(eventName, listener) {
        if (
            !this.listenersMap[eventName]
            || !Array.isArray(this.listenersMap[eventName])
        ) {
            this.listenersMap[eventName] = []
        }

        this.listenersMap[eventName].push(listener)
    }

    emit(eventName, ...args) {
        const eventListeners = this.listenersMap[eventName]
        eventListeners.forEach(listener => {
            listener(...args)
        })
    }

    removeListener(eventName, listener) {
        this.listenersMap[eventName] = this.listenersMap[eventName]
            .filter(l => l !== listener)
    }

    removeAllListeners(eventName) {
        delete this.listenersMap[eventName]
    }
}
