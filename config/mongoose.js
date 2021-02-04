// settings mongodb connect
const mongoose = require('mongoose')

// setting env var mongodb on the mongodb-atlas
const MONGODB_URI = process.env.MOGODB_URI || 'mongodb://localhost/expense-tracker'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
const db = mongoose.connection

db.on('error', () => console.log('The database is not working'))
db.once('open', () => console.log('The database is working'))

module.exports = db
