const path = require('path')
const passport = require(path.join(__dirname, '../config/passport'))
const upload = require(path.join(__dirname, '../config/multer'))
const db = require('./dbController')
const fs = require('fs')

const uploadsPath = path.join(__dirname, '../../frontend/build/public/uploads')

module.exports.login = function (req, res, next) {
  console.log(55555)
  passport.authenticate('local', function (err, user) {
    console.log(user)
    console.log(1111)
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.redirect('/')
    }
    console.log(2222)
    req.logIn(user, function (err) {
      if (err) {
        return next(err)
      }
      console.log(user)
      console.log(3333)
      if (user.Role === 'Admin') {
        return res.redirect('/admin')
      }
      else {
        return res.redirect('/home')
      }
    })
  })(req, res, next)
}

module.exports.addAchieve = function (req, res) {
  if (!fs.existsSync(uploadsPath)) {
    fs.mkdirSync(uploadsPath)
  }
  upload(req, res, async function (err) {
    try {
      if (err || !req.files) {
        return res.status(400).send('ERROR: Max file size = 15MB')
      }
      let achieve = JSON.parse(req.body.data)

      let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      }
      achieve.status = 'Ожидает проверки'
      achieve.date = new Date().toLocaleString('ru', options)

      let arr = []
      for (let file of req.files) {
        arr.push(file.filename)
      }
      achieve.files = arr
      console.log(achieve)
      let createdAchieve = await db.createAchieve(achieve)
      await db.addAchieveToUser(req.user._id, createdAchieve._id)
      res.sendStatus(200)
    }
    catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  })
}

module.exports.addUser = async function (req, res) {
  try {
    console.log(req.body)
    await db.addUser(req.body)
    res.sendStatus(200)
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

module.exports.dynamic = async function (req, res) {
  let Achs = []
  let W = await req.user.Achievement
  for (let i of W) {
    let Ach = await db.findAchieveById(i)

    await Achs.push(Ach)
  }
  res.status(200).send({ LastName: req.user.LastName, FirstName: req.user.FirstName, Patronymic: req.user.Patronymic, Faculty: req.user.Faculty, Course: req.user.Course, AverageMark: req.user.AverageMark, Achs: Achs })
}
