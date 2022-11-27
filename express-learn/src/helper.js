import { v4 as uuidv4 } from 'uuid'


const parseQueryArray = id => {
    let ids = id
    if (!Array.isArray(id)) {
        ids = []
        if (id) {
            ids.push(id)
        }
    }

    return ids
}

const getFileExtension = (fileName = '') => {
    const fileNameArray = fileName.split('.')
    return fileNameArray[fileNameArray.length - 1]
}

const generateId = () => {
    return uuidv4()
}


export {
    parseQueryArray,
    generateId,
    getFileExtension,
}
