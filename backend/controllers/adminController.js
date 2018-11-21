const db = require('./dbController')

module.exports.dynamic = async function (req, res) {
  let info = []
  let Users = await db.allUsers()
  for (let user of Users) {
    let str = user.LastName + ' ' + user.FirstName + ' ' + user.Patronymic
    let Achievements = []
    let Comments = []
    let AchId = []
    for (let achievement of user.Achievement) {
      let ach = await db.findAchieveById(achievement)
      if (ach.status === 'Ожидает проверки') {
        Achievements.push(ach.type)
        AchId.push(ach._id)
        Comments.push(ach.comment)
      }
    }
    info.push({ Id: user._id, user: str, Comments: Comments, Achievements: Achievements, AchId: AchId })
  }
  res.status(200).send({ Info: info })
}

module.exports.allUsers = async function (req, res) {
  let ip = await req.url.slice(6)
  let User = await db.findUserById(ip)
  let Achs = []
  for (let i of User.Achievement) {
    let Ach = await db.findAchieveById(i)
    let files = Ach.files
    let date = Ach.date
    let crit = Ach.type
    let popisal = Ach.comment
    let status = Ach.status
    let Achieve = {
      Files: files,
      Date: date,
      Crit: crit,
      Popisal: popisal,
      Status: status
    }
    Achs.push(Achieve)
  }
  res.status(200).send({ LastName: User.LastName, FirstName: User.FirstName, Patronymic: User.Patronymic, Faculty: User.Faculty, Course: User.Course, AverageMark: User.AverageMark, Achs: Achs })
}

module.exports.AchSuccess = async function (req, res) {
  console.log(req.body.Id)
  db.ChangeAchieve(req.body.Id, true)
}

module.exports.AchFailed = async function (req, res) {
  console.log(req.body.Id)
  db.ChangeAchieve(req.body.Id, false)
}

module.exports.Checked = async function (req, res) {
  let info = []
  let Users = await db.allUsers()
  for (let user of Users) {
    let str = user.LastName + ' ' + user.FirstName + ' ' + user.Patronymic
    let Achievements = []
    let Comments = []
    let AchId = []
    let Status = []
    for (let achievement of user.Achievement) {
      let ach = await db.findAchieveById(achievement)
      if (ach.status !== 'Ожидает проверки') {
        Achievements.push(ach.type)
        AchId.push(ach._id)
        Comments.push(ach.comment)
        Status.push(ach.status)
      }
    }
    info.push({ Id: user._id, user: str, Comments: Comments, Achievements: Achievements, AchId: AchId, Status: Status })
  }
  res.status(200).send({ Info: info })
}

module.exports.getRating = async function (req, res) {
  let users = []
  let Users = await db.allUsers()
  for (let user of Users) {
    console.log(user)
    let str = user.LastName + ' ' + user.FirstName + ' ' + user.Patronymic
    users.push({ Name: str, Ball: user.Ball })
  }
  console.log(users)
  res.status(200).send({ Users: users })
}
