const express = require('express')
const router = express.Router()
require('../../models/record')

const home = require('./modules/home')
const control = require('./modules/control')

router.use('/', home)
router.use('/list', control)

module.exports = router
