const db = require('../../config/mongoose')
const Category = require('../category')
const categories = require('../category.json').results

db.once('open', () => {
  categories.forEach(category => Category.create(category))
})

// db.once('open', () => {
//   const categories = []
//   categoryList.results.forEach(category => {
//     categories.push(category)
//   })
//   Category.create(categories)
//     .then(() => {
//       return db.close()
//     })
// })
