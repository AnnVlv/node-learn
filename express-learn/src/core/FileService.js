import path from 'path'
import { generateId } from '../helper.js'
import { getFileExtension } from '../helper.js'


class FileService {
    saveFile(file) {
        try {
            const fileExtension = getFileExtension(file.name)
            const fileName = this.generateFileName(fileExtension)
            const filePath = path.resolve(process.env.STATIC_DIRNAME, fileName)
            file.mv(filePath)
            return fileName
        } catch (err) {
            console.log(err)
        }
    }

    generateFileName(fileExtension) {
        return `${generateId()}.${fileExtension}`
    }
}

export const fileService = new FileService()
