const userModel = require('../models/user.js');
const achieveModel = require('../models/achieve');

exports.findUserById = function (id) {
  return userModel.findById(id)
};

exports.findUserByName = function (username) {
    return  userModel.findOne({Login: username})
};

exports.createAchieve = function (achieve) {
  return achieveModel.create(achieve)
};

exports.addAchieveToUser = function (userId, achieveId) {
  userModel.findOneAndUpdate({ _id: userId }, { $push: { Achievement: achieveId } })
};

exports.addUser = function (userData) {
    let user = new userModel(userData)
    return user.save()
}

exports.findAchieveById = function (id) {
    return achieveModel.findById(id)
};

