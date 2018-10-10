var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(express.static(__dirname + '/build'))

let port = 88
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/build/login.html')
})