const db = require('../../config/mongoose')
const Category = require('../category')
const category = require('./category.json')

db.once('open', () => {
  category.results.forEach(classification => Category.create(classification))
  console.log('The categorySeeder is done')
})
