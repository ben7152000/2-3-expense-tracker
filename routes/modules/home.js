const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

// home
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find().lean()
    let totalAmount = 0
    await Record
      .find()
      .lean()
      .then(records => {
        const category = [...categories]
        const record = [...records]
        const recordItem = [...record]
        for (const item of recordItem) {
          totalAmount += item.amount
          for (const icon of category) {
            if (icon.name === item.category) {
              item.categoryIcon = icon.icon
            }
          }
        }
        res.render('index', { totalAmount, record })
      })
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
