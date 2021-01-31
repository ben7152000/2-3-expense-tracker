const db = require('../../config/mongoose')
const Record = require('../record')
const record = require('./record.json')

db.once('open', () => {
  record.results.forEach(list => Record.create(list))
})
