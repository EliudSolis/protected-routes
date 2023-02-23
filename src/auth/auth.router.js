const loginUser = require('./auth.services')
const router = require('express').Router()

router.post('/login', loginUser)


module.exports = router