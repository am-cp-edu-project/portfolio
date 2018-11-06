var mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost:27017/portfolio',
  { useNewUrlParser: true }
)

const connection = mongoose.connection

connection.on('error', function () {
  console.log('Connect error')
})
connection.once('open', function () {
  console.log('Mongodb started successfully')
})

module.exports = connection

// haha
