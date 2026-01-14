const express = require('express');
const router = express.Router()
const User = require('../models/userModel')
router.get('/',(req,res)=>{
    res.send('route working.......')
})

router.post('/users',async(req,res)=>{
    try{
        const data = req.body;
        const user = await User.create(data)
        res.status(201).json({
            success:true,
            message:"user create successfull",
            
        })

    }catch(error){
        res.status(400).json({
            message:"failed to create account",
            error
        })
    }
})

module.exports=router