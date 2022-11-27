const Router = require('../../../framework/Router')
const userController = require('./user-controller')


const userRouter = new Router('/user')

userRouter.get('', userController.get)

userRouter.post('', userController.post)

module.exports = userRouter
