const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const controller = require('./modules/controller')

router.use('/', home)
router.use('/list', controller)

module.exports = router
