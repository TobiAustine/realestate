const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        typr:String,
        required: true,
        unique: true
    },
   password:{
        typr:String,
        required: true,
        
    }
    
}, {timestamps:true})


const userModel = mongoose.model('Users', userSchema)

export default userModel