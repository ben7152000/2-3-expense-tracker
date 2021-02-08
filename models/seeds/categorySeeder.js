const db = require('../../config/mongoose')
const Category = require('../category')
const category = require('./category.json').results

db.once('open', () => {
  console.log('mongodb connected !!')
  Category.create(category)
    .then(() => db.close())
  console.log('category is done')
})
