const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routers = require('./routes')

// Mongoose
require('./config/mongoose')

// Normal Setting
const app = express()
const PORT = process.env.PORT || 3000

// Express-Handlebars
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main', helpers: { same: (a, b) => a === b } }))
app.use(express.static('public'))

// Body-Parser
app.use(bodyParser.urlencoded({ extended: true }))

// Route
app.use(routers)

// Listen
app.listen(PORT, console.log(`The server is running on localhost:${PORT}`))
