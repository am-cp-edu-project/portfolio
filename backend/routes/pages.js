const express = require('express')
const router = express.Router()
const path = require('path')
const frontendPath = path.join(__dirname, '../../frontend', '/build')

const auth = (req, res, next) => {
  if (req.isAuthenticated() && req.user.Role === 'User') {
    next()
  }
  else {
    return res.redirect('/login')
  }
}

const adminAuth = (req, res, next) => {
  console.log(req)
  if (req.isAuthenticated() && req.user.Role === 'Admin') {
    next()
  }
  else {
    return res.redirect('/404')
  }
}

router.get('/', (req, res) => res.redirect('/home'))

router.get('/login', (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.Role === 'Admin') {
      return res.redirect('/admin')
    }
    else {
      return res.redirect('/home')
    }
  }
  else {
    res.sendFile(path.join(frontendPath, '/login.html'))
  }
})

router.get('/home', auth, (req, res) => {
  res.sendFile(path.join(frontendPath, '/user_main.html'))
})

router.get('/upload', auth, (req, res) => {
  res.sendFile(path.join(frontendPath, '/add.html'))
})

router.get('/documents', auth, (req, res) => {
  res.sendFile(path.join(frontendPath, '/criterion.html'))
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/admin', adminAuth, (req, res) => {
  res.sendFile(path.join(frontendPath, '/admin.html'))
})

router.get('/processed', adminAuth, (req, res) => {
  res.sendFile(path.join(frontendPath, '/processed.html'))
})

router.get('/rating', adminAuth, (req, res) => {
  res.sendFile(path.join(frontendPath, '/rating.html'))
})

router.get('/info', adminAuth, (req, res) => {
  res.sendFile(path.join(frontendPath, '/info.html'))
})

router.get('/user/*', (req, res) => {
  res.sendFile(path.join(frontendPath, '/profile_admin.html'))
})

router.get('*', function (req, res) {
  res.sendFile(path.join(frontendPath, '/404.html'))
})

module.exports = router
