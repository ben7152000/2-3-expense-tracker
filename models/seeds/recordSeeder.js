const db = require('../../config/mongoose')
const Record = require('../record')
const record = require('./record.json').results

db.once('open', () => {
  console.log('mongodb connected !!')
  Record.create(record)
    .then(() => db.close())
  console.log('record is done !!')
})
