import { Router } from 'express'
import { userController } from './UserController.js'


const router = new Router()

router.get('/', userController.getAll)
router.get('/:id', userController.getById)
router.post('/', userController.create)
router.patch('/', userController.patch)
router.delete('/', userController.delete)

 
export default router
