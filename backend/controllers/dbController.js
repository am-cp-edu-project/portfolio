const UserModel = require('../models/user.js')
const AchieveModel = require('../models/achieve')

exports.allUsers = function () {
  return UserModel.find({ Role: 'User' })
}

exports.findUserById = function (id) {
  return UserModel.findById(id)
}

exports.findUserByName = function (username) {
  return UserModel.findOne({ Login: username })
}

exports.createAchieve = function (achieve) {
  return AchieveModel.create(achieve)
}

exports.addAchieveToUser = function (userId, achieveId) {
  return UserModel.findOneAndUpdate({ _id: userId }, { $push: { Achievement: achieveId } })
}

exports.addUser = function (userData) {
  return UserModel.create(userData)
}

exports.findAchieveById = function (id) {
  return AchieveModel.findById(id)
}

exports.ChangeAchieve = function (id, isGood) {
  if (isGood === true) {
    console.log('Бабушка помоги')
    return AchieveModel.findOneAndUpdate({ _id: id }, { $set: { status: 'Принято' } }, function (err, result) {
      console.log('')
    })
  }
  else {
    return AchieveModel.findOneAndUpdate({ _id: id }, { $set: { status: 'Отказано' } }, function (err, result) {
      console.log('')
    })
  }
}
