var mongoose = require('mongoose')
const connection = require('./config/db')

const childSchema = mongoose.Schema({
  type_of_file: String,
  file: Buffer
})
const achieveSchema = mongoose.Schema({
  crit: String,
  cycle: String,
  dspo: String,
  index: String,
  index_type: String,
  indiv: String,
  izd: String,
  lead: String,
  level: String,
  o4no: String,
  organise: String,
  part: String,
  reward: String,
  role: String,
  sdnsk: String,
  student: String,
  team: String,
  tv: String,
  type: String,
  ud: String,
  winner: String,
  files: [childSchema]
})

var Achieve = connection.model('Achieve', achieveSchema)

module.exports.create_achieve = function (obj1) {
  var newAchieve = new Achieve(obj1)
  var id
  newAchieve
    .save()
    .then(function (doc) {
      id = doc._id
    })
    .catch(function (err) {
      console.log(err)
    })
  return id
}
