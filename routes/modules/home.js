const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

const categoryIcon = require('../../models/seeds/categories.json').results

// home
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(record => {
      let totalAmount = 0
      record.forEach(list => {
        totalAmount += list.amount
      })
      res.render('index', { totalAmount, record, categoryIcon })
    })
    .catch(error => console.error(error))
})

module.exports = router
