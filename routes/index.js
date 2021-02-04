const express = require('express')
const router = express.Router()
require('./config/mongoose')

const home = require('./modules/home')
const control = require('./modules/control')

router.use('/', home)
router.use('/list', control)

module.exports = router
