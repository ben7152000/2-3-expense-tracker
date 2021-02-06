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
    amount: Number(Amount)
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

router.post('/:id/edit', (req, res) => {
  const id = req.params.id
  const { Name, Date, Category, Amount } = req.body
  const [category, categoryIcon] = Category.split('/')
  Record.findById(id)
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
  return Record.findById(id)
    .then(list => list.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// filter
router.get('/filter', (req, res) => {
  const filter = req.query.filter
  if (filter === 'all') {
    return res.redirect('/')
  }
  Record.find({ category: filter })
    .lean()
    .then(record => {
      const newRecord = []
      let totalAmount = 0
      record.forEach(list => {
        if (list.name !== undefined) {
          newRecord.push(list)
          totalAmount += list.amount
        }
      })
      res.render('index', { totalAmount, record: newRecord, filter })
    })
    .catch(error => console.log(error))
})

module.exports = router
