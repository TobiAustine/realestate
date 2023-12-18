const userModel = require('../models/user')
const bcrypt = require('bcryptjs')
const errorHandler  = require('../utils/error')




const signup = async(req, res, next) =>{
    const {username, email, password} = req.body
   // const salt = bcrypt.genSalt(20)


    try {
        if(!username || !email || !password){
            res.status(404).json({"message": "Please fill in all details"})
        }
        
        const userExists = await userModel.findOne({username})
        if(userExists){
            res.status(404).json({"message": "User already exists"})
        }else{
            const hashedPassword = bcrypt.hashSync(password, 10)
            const newUser =await userModel.create({username, email, password: hashedPassword})
            res.status(200).json({"message": `${newUser.username} is now a registered user`})
        }

    } catch (error) {
        //console.log(error); 
        //res.status(500).json({"message": `${error.message} occured`})
        next(errorHandler(500, 'An error occured'))
    }

}



module.exports = {signup}