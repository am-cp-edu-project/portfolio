const path = require('path')
const passport = require(path.join(__dirname, '../config/passport'))
const upload = require(path.join(__dirname, '../config/multer'))
const db = require('./dbController')
const fs = require('fs')

module.exports.login = function (req, res, next) {
  passport.authenticate('local', function (err, user) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.redirect('/')
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err)
      }
      if (user.username === 'admin') {
        return res.redirect('/admin')
      }
      else {
        return res.redirect('/home')
      }
    })
  })(req, res, next)
}

module.exports.addAchieve = function (req, res) {
  if (!fs.existsSync('uploads/')) {
    fs.mkdirSync('uploads/')
  }
  upload(req, res, async function (err) {
    try {
      if (err || !req.files) {
        return res.status(400).send('ERROR: Max file size = 15MB')
      }
      let achieve = JSON.parse(req.body.data)
      let arr = []
      for (let file in req.files) {
        arr.push(file.filename)
      }
      achieve.files = arr
      let createdAchieve = await db.createAchieve(achieve)
      await db.addAchieveToUser(req.user._id, createdAchieve._id)
      res.sendStatus(200)
    }
    catch (err) {
      res.status(500).send(err)
    }
  })
}
