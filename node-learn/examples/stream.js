const path = require('path')
const fs = require('fs')


const readStream = fs.createReadStream(path.resolve(__dirname, 'public', 'text.txt'), { encoding: 'utf-8' })
readStream.on('open', () => {
    console.log('Open')
})
readStream.on('close', () => {
    console.log('Close')
})
readStream.on('data', data => {
    console.log(data)
})

const writeStream = fs.createWriteStream(path.resolve(__dirname, 'public', 'output.txt'))
Array(10)
.fill(null)
.map((_, i) => i + 1)
.forEach(i => {
    writeStream.write(`${i}\n`)
})
writeStream.end()
