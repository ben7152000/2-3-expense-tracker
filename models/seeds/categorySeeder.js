const db = require('../../config/mongoose')
const Category = require('../category')
const categories = require('../category.json').results

const p = new Promise((resolve, reject) => {
  db.once('open', () => {
    console.log('mongodb connected !!')
    resolve()
  })
})
p.then(() => {
  categories.forEach(category => new Category(category))
})
  .then(() => console.log('category is done'))
  .then(() => db.close())
  .catch(err => console.log(err))
