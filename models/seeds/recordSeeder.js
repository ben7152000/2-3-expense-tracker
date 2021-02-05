const db = require('../../config/mongoose')
const Record = require('../../record')
const records = require('./record.json').results
const recordIcon = require('./category.json').results

db.once('open', () => {
  const recordList = []
  records.forEach(record => {
    const icon = recordIcon.find(category => category.name === record.category).icon
    record.categoryIcon = icon
    recordList.push(record)
  })
  console.log('mongodb connected !!')
  Record.create(recordList)
    .then(() => db.close())
  console.log('record is done !!')
})
