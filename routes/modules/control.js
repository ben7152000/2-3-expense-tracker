const express = require('express')
const router = express.Router()
const recordmodel = require('../../models/record')

// New
router.get('/new', (req, res) => res.render('new'))

router.post('/new', (req, res) => {
  const { Name, Date, Category, Amount } = req.body
  const [category, categoryIcon] = Category.split('/')
  recordmodel.create({
    name: Name,
    date: Date,
    category,
    categoryIcon,
    amount: Number(Amount)
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  recordmodel.findById(id)
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
})

router.post('/:id/edit', (req, res) => {
  const id = req.params.id
  const { Name, Date, Category, Amount } = req.body
  const [category, categoryIcon] = Category.split('/')
  recordmodel.findById(id)
    .then(record => {
      record.name = Name
      record.date = Date
      record.category = category
      record.categoryIcon = categoryIcon
      record.amount = Amount
      record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// delete
router.post('/:id/delete', (req, res) => {
  const id = req.params.id
  return recordmodel.findById(id)
    .then(list => list.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// filter
router.get('/filter', (req, res) => {
  const filter = req.query.filter
  if (filter === 'all') res.redirect('/')
  recordmodel.find({ category: filter })
    .lean()
    .then(record => {
      let totalAmount = 0
      record.forEach(list => {
        totalAmount += list.amount
      })
      res.render('index', { totalAmount, record, filter })
    })
    .catch(error => console.log(error))
})

module.exports = router
