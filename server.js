const express=require ('express')
const connectDB = require('./config/connectDB')
const router =require('./route/contact')
const app=express()
const port=5000
connectDB()
app.use (express.json())
app.use('/api/example', router)
app.listen (port, ()=>console.log(`the server running on port ${port}`))