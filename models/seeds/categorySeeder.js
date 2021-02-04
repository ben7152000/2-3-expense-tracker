const db = require('../../config/mongoose')
const Category = require('../category')
const categoryList = require('../category.json')

db.once('open', () => {
  const categories = []
  categoryList.results.forEach(category => {
    categories.push(category)
  })
  Category.create(categories)
    .then(() => {
      return db.close()
    })
})
