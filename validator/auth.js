const { check } = require('express-validator')

exports.userSignupValidator = [
    check('name').not().isEmpty().withMessage('Name is required'), check('password').isLength({ min: 6 }).withMessage('password at least 6 characters long')
]


