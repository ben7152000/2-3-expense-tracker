const mongoose = require('mongoose')

const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: String,
  date: String,
  amount: Number,
  category: {
    type: String
  },
  categoryIcon: {
    type: String
  }
})

module.exports = mongoose.model('Record', recordSchema)
