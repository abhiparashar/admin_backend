const express = require('express')
const router = express.Router()
const { signup } = require('../controller/auth')

//validation
const { runValidation } = require('../validator/index')
const { userSignupValidator } = require('../validator/auth')

router.post("/signup", userSignupValidator, runValidation, signup);

module.exports = router



