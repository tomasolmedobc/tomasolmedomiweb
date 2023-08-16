const { check } = require ('express-validator')
const { validateResult } = require ('../helpers/validateHelpers')

const validateCreate = [
    check('name')
        .exist()
        .not()
        .isEmpty(),
    check('email')
        .exist()
        .not()
        .isEmpty(), 
    check('password')
        .exist()
        .not()
        .isEmpty(),
    (req, res, next) =>{
        validateResult (req, res, next)
    }
]