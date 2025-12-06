const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

//Login Routes
router.post('/login', userController.loginuser)

//Signup Routes
router.post('/signup', userController.signupuser)

module.exports = router