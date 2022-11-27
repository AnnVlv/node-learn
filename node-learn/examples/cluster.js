const os = require('os')
const cluster = require('cluster')


if (cluster.isPrimary) {
    const cpus = os.cpus()
    for (let i = 0; i < cpus.length - 6; i++) {
        cluster.fork()
    }
    cluster.on('exit', worker => {
        console.log('del', worker.process.pid)
        cluster.fork()
    })
} else {
    console.log('start', process.pid)
    setInterval(() => {
        console.log(process.pid)
    }, 1000)
}
