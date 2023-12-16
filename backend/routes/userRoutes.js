const express = require('express');
const Router = express.Router()
const {getData} = require('../controllers/userController')


Router.get('/', getData )



module.exports =  Router