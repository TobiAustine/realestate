const express = require('express')
const router = express.Router()

const {signup, login, google  } = require('../controllers/authController')


router.post('/login', login)
router.post('/signup', signup)
router.post('/google', google )






module.exports = router