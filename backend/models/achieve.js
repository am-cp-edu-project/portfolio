const mongoose = require('mongoose')
const connection = require('../config/db')

const fileSchema = mongoose.Schema({
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
  files: [fileSchema]
})

const Achieve = connection.model('Achieve', achieveSchema)

module.exports = Achieve
