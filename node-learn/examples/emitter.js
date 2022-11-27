const Emitter = require('events')


const emitter = new Emitter()

const handler = (message) => {
    console.log(message)
}
emitter.on('message', handler)
setTimeout(() => {
    emitter.removeAllListeners('message')
}, 1000)

emitter.emit('message', 'lama1')
setTimeout(() => {
    emitter.emit('message', 'lama2')
}, 1500)
