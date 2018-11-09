const express = require('express')
const router = express.Router()
const path = require('path')
const frontendPath = path.join(__dirname, '../../frontend', '/build')

const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  }
  else {
    return res.redirect('/login')
  }
}

router.get('/', (req, res) => res.redirect('/home'))

router.get('/login', (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/home')
  }
  else {
    res.sendFile(path.join(frontendPath, 'login.html'))
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

router.get('*', function (req, res) {
  res.sendFile(path.join(frontendPath + '/404.html'))
})

module.exports = router
