// const express = require('express')
// const router = express.Router()

// const Record = require('../../models/record')

// const categoryIcon = require('../../models/seeds/categories.json').results

// // home
// router.get('/', (req, res) => {
//   Record.find()
//     .lean()
//     .then(record => {
//       let totalAmount = 0
//       record.forEach(list => {
//         totalAmount += list.amount
//       })
//       res.render('index', { totalAmount, record, categoryIcon })
//     })
//     .catch(error => console.error(error))
// })

// module.exports = router

// Require Express and Express router
const express = require('express')
const router = express.Router()

// Require Record model
const Record = require('../../models/record')

// Require category list
const categoryList = require('../../models/seeds/categories.json').results

// Set up routes of homepage
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(record => {
      let totalAmount = 0
      record.forEach(record => {
        totalAmount += record.amount
      })
      res.render('index', { record, totalAmount, categoryList })
    })
    .catch(error => console.log(error))
})

// Export
module.exports = router
