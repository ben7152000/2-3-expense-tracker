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
  const record = []
  for (let i = 0; i < records.length; i++) {
    const newRecord = new Record(records[i])
    record.push(newRecord)
  }
  console.log('record is done')
  return record
})
  .then(() => db.close())
  .catch(err => console.log(err))
