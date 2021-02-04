const db = require('../../config/mongoose')
const Record = require('../record')
const records = require('../record.json')

db.once('open', () => records.results.forEach(record => Record.create(record)))
