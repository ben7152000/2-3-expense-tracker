const db = require('../../config/mongoose')
const Record = require('../record')
const records = require('./record.json').results

db.once('open', () => {
  console.log('mongodb connected !!')
  Record.create(records)
    .then(() => db.close())
  console.log('record is done !!')
})
