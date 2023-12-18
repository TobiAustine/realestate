const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');


const mongodb = process.env.MONGODB

const userRoutes = require('./routes/userRoutes')
const auth = require('./routes/auth')


app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json({limit:'30mb', extended:true}))
app.use(cors({
    origin:['http://localhost:5173']
}))

mongoose.connect(mongodb)
    .then(() => {console.log('db connected');})
    .catch((error) => {console.log(error);})
app.listen(8000, () =>{
    console.log('Server running');
}) 


app.use('/', userRoutes )
app.use('/auth', auth)

app.use((err, req, res,next) =>{
    const statusCode = err.statusCode || 500
    const errorMsg = err.message || 'A server error occured' 
    return res.status(statusCode).json({"message": errorMsg})
})