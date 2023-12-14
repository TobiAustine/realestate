const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const mongodb = process.env.MONGODB


mongoose.connect(mongodb)
    .then(() => {console.log('db connected');})
    .catch((error) => {console.log(error);})
app.listen(8000, () =>{
    console.log('Server running');
})  