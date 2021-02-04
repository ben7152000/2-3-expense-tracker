const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Router = require('./routes/index')

// Normal Setting
const app = express()
const PORT = process.env.PORT || 3000

// Mongoose
require('./config/mongoose')

// Body-Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Express-Handlebars
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main', helpers: { same: (a, b) => a === b } }))
app.use(express.static('public'))

// Route
app.use(Router)

// Listen
app.listen(PORT, () => console.log(`The server is running on localhost:${PORT}`))
