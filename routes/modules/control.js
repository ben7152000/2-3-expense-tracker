const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// New
router.get('/new', (req, res) => res.render('new'))

router.post('/new', (req, res) => {
  const { Name, Date, Category, Amount } = req.body
  const [category, categoryIcon] = Category.split('/')
  Record.create({
    name: Name,
    date: Date,
    category,
    categoryIcon,
    amount: Amount
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
})

// delete
router.post('/:id/delete', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(list => list.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
