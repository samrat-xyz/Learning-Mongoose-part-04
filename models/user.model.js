import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        min:[5,"Name contain at least 5 charecter"],
        max:[25,['Name contain maximum 25 charecter']]
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
})

const UserModel =  mongoose.model("User",userSchema)

module.exports=UserModel