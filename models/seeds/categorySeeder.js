const db = require('../../config/mongoose')
const Record = require('../record')
const categories = require('./category.json').results

db.once('open', () => {
  console.log('mongodb connected !!')
  Record.create(categories)
    .then(() => db.close())
  console.log('category is done')
})
