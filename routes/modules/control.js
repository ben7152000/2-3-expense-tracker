const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const record = []

// New
router.get('/new', (req, res) => res.render('new'))

router.post('/', (req, res) => {
  const list = req.body
  record.create(list)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
  console.log(record)
})

// Edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((list) => res.render('../views/edit', { list }))
    .catch(error => console.log(error))
})

module.exports = router
