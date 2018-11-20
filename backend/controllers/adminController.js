const db = require('./dbController')

module.exports.dynamic = async function (req, res) {
  let info = []
  let Users = await db.allUsers()
  for (let user of Users) {
    let str = user.FirstName + ' ' + user.LastName + ' ' + user.Patronymic
    let Achievements = []
    let Comments = []
    for (let achievement of user.Achievement) {
      let ach = await db.findAchieveById(achievement)
      Achievements.push(ach.type)
      Comments.push(ach.comment)
    }
    info.push({ Id: user._id, user: str, Comments: Comments, Achievements: Achievements })
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
  res.status(200).send({ LastName: User.LastName, FirstName: User.FirstName, Patronymic: User.Patronymic, Faculty: User.Faculty, Course: User.Course, AverageMark: User.AverageMark, Achs: Achs })
}
