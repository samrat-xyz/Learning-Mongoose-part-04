const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()
const dbConnect = require('./config/dbConnect')
const app = express()
const port = process.env.PORT

// middleware 
app.use(express.json())
app.use(cors())

// db
dbConnect()

app.get('/',(req,res)=>{
    res.send('Mongoose 04 running.....')
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})