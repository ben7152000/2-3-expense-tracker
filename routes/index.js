const express = require('express')
const router = express.Router()

const home = require('./modules/home')
// const control = require('./modules/control')

router.use('/', home)
// router.use('/list', control)

module.exports = router
