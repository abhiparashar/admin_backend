const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        required:true,
        max:32,
        unique:true,
        index:true,
        lowerase:true
    },
    hashed_password:{
        type:String,
        required:true
    },
    salt:Number,
    role:{
        type:Number,
        trim:true
    },
    resetPasswordLink:{
        data:String,
        default:""
    }
})

module.exports = mongoose.model('User',userSchema)