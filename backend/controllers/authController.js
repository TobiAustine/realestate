const userModel = require('../models/user')
const bcrypt = require('bcryptjs')
const errorHandler  = require('../utils/error')
const jwt = require('jsonwebtoken');




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


const login = async(req,res, next) =>{
    const {email, password} = req.body
    try{
            //check if user exists
            const userExists = await userModel.findOne({email})
            if(!userExists){
                res.status(404)
                throw new Error('User does not exist, please sign up!!!')
                return next(errorHandler(404, 'User does not exist, please sign up!!!' ) )
            }
            
            const comparePassword = bcrypt.compareSync(password, userExists.password )
                if(!comparePassword){
                    res.status(404)
                    throw new Error('Wrong credentials, please try again!!!')
                    return next(errorHandler(404, 'Wrong credentials, please try again!!!' ) )     
            } 

        const token = jwt.sign({id: userExists._id}, process.env.JWT, {expiresIn: '5d'})

        const {password: pass, ...user} = userExists._doc    

        res.cookie('token', token, {
            httpOnly:true,
            path:'/',
            expires:new Date(Date.now() + 1000 * 432000), //5days
            sameSite: 'none',
            secure:true 
           }).status(200).json({"message":"You have successfully logged in", token,user})


         
    }catch(error){
        next(error)
    }
}

const google = async(req,res, next) =>{
    const {username, email, photo} = req.body
    try {
        const user = await userModel.findOne({email})
    if(user){
            const token = jwt.sign({id: user._id}, process.env.JWT, {expiresIn:'5d'})
            const {password, ...rest} = user._doc
            res.cookie('token', token, {
               httpOnly: true, 
            }).status(200).json(rest)
    }else{
        const newPassword = Math.random().toString(36).slice(-8)
        const hashedPassword = bcrypt.hashSync(newPassword, 20)
        const newUser = await userModel.create({username: username.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4), email, password: hashedPassword, photo})

        const {password, ...user} = newUser._doc

        const token = jwt.sign({id: newUser._id}, process.env.JWT, {expiresIn:'5d'})
        res.cookie('token', token, {httpOnly: true}).status(200).json(user)

    }
     
    } catch (error) {
        
    }
}


module.exports = {signup, login, google}