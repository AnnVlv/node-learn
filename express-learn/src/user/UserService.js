import User from './User.js'
import { fileService } from '../core/FileService.js'


class UserService {
    async getAll() {
        const users = await User.find()
        return users
    }

    async getById(id) {
        const user = await User.findById(id)
        return user
    }

    async create(userToCreate, userAvatar) {
        const avatar = fileService.saveFile(userAvatar)
        const user = new User({
            ...userToCreate,
            avatar,
        })
        await user.save()
        return user
    }

    async patch(userToPatch) {
        const id = userToPatch._id
        await User.findByIdAndUpdate(id, userToPatch)
        const user = await User.findById(id)
        return user
    }

    async delete(ids) {
        const deletedUsersInfo = (
            await Promise.allSettled(ids.map(id => User.findByIdAndDelete(id)))
        ).map(promiseResult => ({
            deleted: Boolean(promiseResult.value),
            value: promiseResult.value,
        }))
        return deletedUsersInfo
    }
}

export const userService = new UserService()
