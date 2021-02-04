const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Router = require('./routes/index')

// Normal Setting
const app = express()

// Mongoose
require('./config/mongoose')

// Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))

// Express-Handlebars
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main', helpers: { same: (a, b) => a === b } }))
app.use(express.static('public'))

// Route
app.use(Router)

// Listen
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env)
})
