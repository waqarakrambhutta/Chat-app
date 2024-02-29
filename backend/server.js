import express from 'express'
import dotenv from 'dotenv'

import authRoutes from '../backend/routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use("/api/auth",authRoutes)

dotenv.config()


app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`)
})


// app.get('/',(req,res)=>{
    // res.send("Hello World!")
// })