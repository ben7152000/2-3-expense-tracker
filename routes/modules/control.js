const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// New
router.get('/new', (req, res) => res.render('new'))

router.post('/', (req, res) => {
  const record = req.body
  console.log(record.category)
  // Record.create({
  //   name: record.name,
  //   date: record.date,
  //   category: record.category,
  //   categoryIcon: record.category,
  //   amount: record.amount
  // })
  //   .then(() => res.redirect('/'))
  //   .catch(error => console.log(error))
})

// Edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((list) => res.render('edit', { list }))
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
