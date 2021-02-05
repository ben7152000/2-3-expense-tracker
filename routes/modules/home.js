const Record = require('../../models/record')
const express = require('express')
const router = express.Router()

// home
router.get('/', (req, res) => {
  const records = new Record()
  records
    .find()
    .lean()
    .then(record => {
      let totalAmount = 0
      record.forEach(list => {
        totalAmount += list.amount
      })
      res.render('index', { totalAmount, record })
    })
    .catch(error => console.error(error))
})

module.exports = router
