const db = require('../../config/mongoose')
const Record = require('../record')
const recordList = require('../record.json')
const categoryList = require('../category.json')

db.once('open', () => {
  const records = []
  recordList.results.forEach(record => {
    const icon = categoryList.results.find(
      category => category.name === record.category
    ).icon
    record.categoryIcon = icon
    records.push(record)
  })
  Record.create(records)
    .then(() => {
      return db.close()
    })
})
