const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

// Mongoose
require('./config/mongoose')

// Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))

// Express-Handlebars
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT)

console.log(`The server is running on localhost:${PORT}`)
