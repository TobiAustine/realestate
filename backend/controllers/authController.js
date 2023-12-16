const userModel = require('../models/user')



const signup = async(req, res) =>{
    const {username, email, password} = req.body

    try {
        if(!username || !email || !password){
            res.status(404).json({"message": "Please fill in all details"})
        }
        
        const userExists = await userModel.findOne({username})
        if(userExists){
            res.status(404).json({"message": "User already exists"})
        }else{
            const newUser =await userModel.create({username, email, password})
            res.status(200).json({"message": `${newUser.username} is now a registered user`})
        }

    } catch (error) {
        console.log(error);
    }

}



module.exports = {signup}