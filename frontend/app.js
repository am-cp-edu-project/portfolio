var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static(__dirname + '/build/public'))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let port = 88
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/build/login.html')
})
app.get('/add', (req, res) => {
    res.sendFile(__dirname + '/build/add.html')
})

/*app.post('/add_file', (req, res) => {
    console.log('Uploaded: ', req.body);
})*/

app.post('/add_file', upload.array('kek', 12), function (req, res, next) {
  console.log(req.files[0].mimetype);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build/login.html')
})
