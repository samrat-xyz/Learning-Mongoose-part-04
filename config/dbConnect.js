const mongoose = require("mongoose")

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongoose connected to database successfully')
    } catch (error) {
        console.error('Error is :',error)
    }
}

module.exports=dbConnect