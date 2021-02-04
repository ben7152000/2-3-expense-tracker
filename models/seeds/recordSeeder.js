const db = require('../../config/mongoose')
const Record = require('../record')
const records = require('../record.json').results

const p = new Promise((resolve, reject) => {
  db.once('open', () => {
    console.log('mongodb connected !!')
    resolve()
  })
})
p.then(() => {
  records.forEach(list => new Record(list))
  console.log('record is done')
})
  .then(() => db.close())
  .catch(err => console.log(err))
