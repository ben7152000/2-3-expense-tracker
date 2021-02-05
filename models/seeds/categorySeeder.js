const db = require('../../config/mongoose')
const Category = require('../category')
const categories = require('./category.json').results

db.once('open', () => {
  console.log('mongodb connected !!')
  Category.create(categories)
    .then(() => db.close())
  console.log('category is done')
})
