const UserModel = require('../models/user.js')
const AchieveModel = require('../models/achieve')

exports.findUserById = function (id) {
  return UserModel.findById(id)
}

exports.findUserByName = function (username) {
  return UserModel.findOne({ Login: username })
}

exports.createAchieve = function (achieve) {
  console.log(achieve)
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
