const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');


const mongodb = process.env.MONGODB

const userRoutes = require('./routes/userRoutes')
const auth = require('./routes/auth')


app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json({limit:'30mb', extended:true}))

mongoose.connect(mongodb)
    .then(() => {console.log('db connected');})
    .catch((error) => {console.log(error);})
app.listen(8000, () =>{
    console.log('Server running');
}) 


app.use('/', userRoutes )
app.use('/auth', auth)