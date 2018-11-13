const path = require('path')
const passport = require(path.join(__dirname, '../config/passport'))
const upload = require(path.join(__dirname, '../config/multer'))
const db = require('./dbController')
const fs = require('fs')

const uploadsPath = path.join(__dirname, '../../frontend/build/public/uploads')

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
  for (let i of req.user.Achievement) {
    let Ach = await db.findAchieveById(i)
    let files = Ach.files
    let date = Ach.date
    let crit = Ach.type
    let popisal = Ach.comment
    let status = 'Ожидает проверки'
    let Achieve = {
      Files: files,
      Date: date,
      Crit: crit,
      Popisal: popisal,
      Status: status
    }
    Achs.push(Achieve)
  }
  res.send({ LastName: req.user.LastName, FirstName: req.user.FirstName, Patronymic: req.user.Patronymic, Faculty: req.user.Faculty, Course: req.user.Course, AverageMark: req.user.AverageMark, Achs: Achs })
}
