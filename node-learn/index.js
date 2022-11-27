const Application = require('./framework/Application')
const userRouter = require('./src/features/user/user-router')
const jsonMiddleware = require('./framework/middlewares/jsonMiddleware')
const createReqUrlMiddleware = require('./framework/middlewares/createReqUrlMiddleware')


const PORT = process.env.PORT || 3001

const app = new Application()

app.addRouter(userRouter)

app.addMiddleware(jsonMiddleware)
app.addMiddleware(createReqUrlMiddleware(`http://localhost:${PORT}`))

app.listen(PORT, () => {
    console.log('Server is running...')
})
