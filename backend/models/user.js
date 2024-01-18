const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
   password:{
        type:String,
        required: true,
        
    },
    photo:{
        type:String,
        default: 'https://shorturl.at/dlDG3'
    },
}, {timestamps:true})


const userModel = mongoose.model('Users', userSchema)

module.exports = userModel