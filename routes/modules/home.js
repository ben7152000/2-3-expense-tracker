const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// home
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(record => {
      const newRecord = []
      let totalAmount = 0
      record.forEach(list => {
        if (list.name !== undefined) {
          newRecord.push(list)
          totalAmount += list.amount
        }
      })
      res.render('index', { totalAmount, record: newRecord })
    })
    .catch(error => console.error(error))
})

module.exports = router
