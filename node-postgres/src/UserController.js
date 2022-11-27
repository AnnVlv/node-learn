import UserService from './UserService.js'


class UserController {
    constructor() { }

    async getAll(req, res) {
        const users = await UserService.getAll()
        res.json(users)
    }

    async getById(req, res) {
        const { id } = req.params
        const user = await UserService.getById(id)
        res.json(user)
    }

    async create(req, res) {
        const data = await UserService.create(req.body)
        res.status(201)
        res.json(data)
    }

    async update(req, res) {
        const data = await UserService.update(req.body)
        res.json(data)
    }

    async delete(req, res) {
        const { id } = req.params
        const data = await UserService.delete(id)
        res.json(data)
    }
}


export default new UserController()
