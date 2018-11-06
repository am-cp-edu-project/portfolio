var mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost:27017/admin',
  { useNewUrlParser: true }
)
const connection = mongoose.connection
connection.on('error', function () {
  console.log('Ошибка')
})
connection.once('open', function () {
  console.log('Achieve - success')
})

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
