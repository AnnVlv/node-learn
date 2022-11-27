import express, { json } from 'express'
import userRouter from './src/userRouter.js'
import db from './db.js'


const app = express()
app.use(express.json())

app.use('/user', userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is running...')
})
