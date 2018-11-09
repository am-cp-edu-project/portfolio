const userModel = require('../models/user.js')
const achieveModel = require('../models/achieve')

exports.findUserById = function (id) {
  return userModel.findById(id)
}

exports.findUserByName = function (username) {
  return userModel.findOne({ Login: username })
}

exports.createAchieve = function (achieve) {
  return achieveModel.create(achieve)
}

exports.addAchieveToUser = function (userId, achieveId) {
  userModel.update({ _id: userId }, { $push: { Achievement: achieveId } })
}
