const express = require('express')
const router = express.Router()

// New
router.get('/new', (req, res) => res.render('new'))

router.post('/new', (req, res) => {
  const { name, date, category, amount } = req.body
  console.log(name, date, category, amount)
})

// Edit
router.get('/edit', (req, res) => res.render('edit'))

module.exports = router
