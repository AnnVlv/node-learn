import { userService } from './UserService.js'
import { parseQueryArray } from '../helper.js'


const ERROR = { error: { message: 'Error' } }

class UserController {
    async getAll(req, res) {
        try {
            const users = await userService.getAll()
            res.json(users)
        } catch {
            res.json(ERROR)
        }
    }

    async getById(req, res) {
        const { id } = req.params
        try {
            const user = await userService.getById(id)
            res.json(user)
        } catch {
            res.json(ERROR)
        }
    }

    async create(req, res) {
        try {
            const { avatar } = req.files
            const user = await userService.create(req.body, avatar)
            res.json(user)
        } catch {
            res.json(ERROR)
        }
    }

    async patch(req, res) {
        try {
            const user = await userService.patch(req.body)
            res.json(user)
        } catch(err) {
            res.json(ERROR)
        }
    }

    async delete(req, res) {
        const { id } = req.query
        const ids = parseQueryArray(id)
        try {
            const deletedUsersInfo = await userService.delete(ids)
            res.json(deletedUsersInfo)
        } catch {
            res.json(ERROR)
        }
    }
}

export const userController = new UserController()
