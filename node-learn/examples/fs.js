const fs = require('fs')
const path = require('path')


const readFilePromise = (path, options = { encoding: 'utf-8' }) => {
    return new Promise((res, rej) => {
        fs.readFile(path, options, (err, data) => {
            err ? rej(err) : res(data)
        })
    })
}

const writeFilePromise = (path, data) => {
    return new Promise((res, rej) => {
        fs.writeFile(path, data, (err, data) => {
            err ? rej(err) : res(data)
        })
    })
}

const appendFilePromise = (path, data) => {
    return new Promise((res, rej) => {
        fs.appendFile(path, data, (err, data) => {
            err ? rej(err) : res(data)
        })
    })
}

const removeFilePromise = (path) => {
    return new Promise((res, rej) => {
        fs.rm(path, (err, data) => {
            err ? rej(err) : res(data)
        })
    })
}


const fileData = process.env.FILE_DATA || ''

const inputFileName = 'input.txt'
const outputFileName = 'output.txt'
const inputFilePath = path.resolve(__dirname, inputFileName)
const outputFilePath = path.resolve(__dirname, outputFileName)

// function main() {
//     Promise.resolve()
//         .then(() => writeFilePromise(inputFilePath, fileData))
//         .then(() => readFilePromise(inputFilePath))
//         .then(data => {
//             const wordCount = data.split(' ').length
//             return writeFilePromise(outputFilePath, wordCount.toString())
//         })
//         .then(() => removeFilePromise(inputFilePath))
// }
async function main() {
    await writeFilePromise(inputFilePath, fileData)
    const data = await readFilePromise(inputFilePath)
    const wordCount = data.split(' ').length
    await writeFilePromise(outputFilePath, wordCount.toString())
    await removeFilePromise(inputFilePath)
}
main()
