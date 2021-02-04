const mongoose = require('mongoose')
const MOGODB_URI = process.env.MOGODB_URI || 'mongodb://localhost/expense-tracker'
mongoose.connect(MOGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
const db = mongoose.connection

db.on('error', () => console.log('The database is not working'))
db.once('open', () => console.log('The database is working'))

module.exports = db
