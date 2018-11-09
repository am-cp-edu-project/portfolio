const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const morgan = require('morgan')
const path = require('path')

const passport = require('./config/passport') // configuring passport here

const frontendPath = path.join(__dirname, '../frontend', '/build')
const port = 8181

const app = express()

app.use(morgan('dev'))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(frontendPath, '/public')))

app.use(
  session({
    secret: 'ОченьОченьСекретноеСлово',
    store: new FileStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize())
app.use(passport.session())

const apiRoutes = require('./routes/api.js')
const pagesRoutes = require('./routes/pages.js')

app.use('/', apiRoutes)
app.use('/', pagesRoutes)

app.listen(port, () => console.log('Example app listening on port ' + port))
