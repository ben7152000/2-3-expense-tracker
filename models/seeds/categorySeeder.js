const db = require('../../config/mongoose')
const Record = require('../record')
const category = require('./category.json').results

db.once('open', () => {
  console.log('mongodb connected !!')
  const newCategory = []
  newCategory.push(Record.create({
    category: category.category,
    categoryIcon: category.categoryIcon
  }))
  Promise.all(newCategory)
    .then(() => db.close())

  console.log('category is done')
})
