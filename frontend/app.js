var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(express.static(__dirname + '/build'))

app.listen(80, () => {
    console.log('Listening on port 80')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/build/login.html')
})