const express = require('express')
const router = express.Router()
const record = require('../../models/seeds/record.json')

router.get('/', (req, res) => {
  res.render('index', { record: record.results })
})

module.exports = router
