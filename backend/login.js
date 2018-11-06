const express = require('express')
const multer = require('multer')
//const upload = multer({ dest: 'uploads/' });
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const passport = require('passport')
const morgan = require('morgan')
var path = require('path')

var storage = multer.memoryStorage()
var upload = multer({
  storage: storage
})
path = path.resolve('../frontend') + '/build'

const app = express()
const port = 8080
app.use(morgan('dev'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(
  session({
    secret: 'ОченьОченьСекретноеСлово',
    store: new fileStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path + '/public'))

var _user = require('./config-passport')
app.use(passport.initialize())
app.use(passport.session())

app.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.redirect('/')
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err)
      }
      if (user.role === 'admin') {
        return res.redirect('/admin')
      }
      if (user.role === 'user') {
        return res.redirect('/home')
      }
    })
  })(req, res, next)
})

const auth = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'user') {
    next()
  } else {
    return res.redirect('/login')
  }
}

const adminAuth = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role == 'admin') {
    next()
  } else {
    return res.redirect('/404')
  }
}
var add = require('./add')
app.post('/add_achieve', upload.array('files', 12), function(req, res, next) {
  var ach = JSON.parse(req.body.data)
  var arr = new Array()
  var i = 0
  console.log(req.user.username)
  while (req.files[i]) {
    var tmp = {}
    tmp.file = req.files[i].buffer
    tmp.type_of_file = req.files[i].mimetype
    arr[i] = tmp
    console.log(tmp)
    i = i + 1
  }
  ach.files = arr
  var id = add.create_achieve(ach)
  _user.update(id, req.user._id)
})

app.get('/login', (req, res) => res.sendFile(path + '/login.html'))

app.get('/', (req, res) => res.redirect('/home'))

app.get('/home', auth, (req, res) => {
  res.sendFile(path + '/user_main.html')
})

app.get('/upload', auth, (req, res) => {
  res.sendFile(path + '/add.html')
})

app.get('/documents', auth, (req, res) => {
  res.sendFile(path + '/criterion.html')
})

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

app.get('/admin', adminAuth, (req, res) => {
  res.sendFile(path + '/admin.html')
})

app.get('/processed', adminAuth, (req, res) => {
  res.sendFile(path + '/processed.html')
})

app.get('/rating', adminAuth, (req, res) => {
  res.sendFile(path + '/rating.html')
})

app.get('*', function(req, res) {
  res.sendFile(path + '/404.html')
})

app.listen(port, () => console.log('Example app listening on port ' + port))
