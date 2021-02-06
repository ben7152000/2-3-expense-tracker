const db = require('../../config/mongoose')
const Record = require('../record')
const records = require('./record.json').results

db.once('open', () => {
  console.log('mongodb connected !!')
  Record.create({
    category: records.category,
    categoryIcon: records.categoryIcon
  })
    .then(() => db.close())
  console.log('category is done')
})
