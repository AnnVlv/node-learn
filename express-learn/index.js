import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import * as dotenv from 'dotenv'; dotenv.config()
import userRouter from './src/user/userRouter.js'


const app = express()

app.use(express.json())
app.use(express.static(process.env.STATIC_DIRNAME))
app.use(fileUpload({}))

app.use('/user', userRouter)


const main = () => {
    try {
        const DB_URL = 'mongodb+srv://user:1234@cluster0.71voeyq.mongodb.net/?retryWrites=true&w=majority'
        mongoose.connect(DB_URL)
    } catch {
        console.log('Error with connection to database')
    }

    app.listen(process.env.PORT, () => {
        console.log('Server is running...')
    })
}
main()
