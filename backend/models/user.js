const mongoose = require('mongoose');
const connection = require('../config/db');

const userSchema = mongoose.Schema({
  Login: String,
  Password: String,
  Role: String,
  LastName: String,
  FirstName: String,
  Patronymic: String,
  AverageMark: Number,
  Achievement: [String]
});

const User = connection.model('User', userSchema);

module.exports = User;
