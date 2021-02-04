const db = require('../../config/mongoose')
const Record = require('../record')
const records = require('../record.json').results

const p = new Promise((resolve, reject) => {
  db.once('open', () => {
    console.log('mongodb connected !!')
    resolve()
  })
})
p.then(() => Record.create(records))
  .then(() => console.log('record is done'))
  .catch(err => console.log(err))
