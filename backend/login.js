const express = require("express");
const multer = require("multer");
//const upload = multer({ dest: 'uploads/' });
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const passport = require("passport");
const morgan = require("morgan");
var path = require("path");

var storage = multer.memoryStorage();
var upload = multer({
  storage: storage
});

path = path.resolve("../frontend") + "/build";

const app = express();
const port = 8080;

app.use(morgan("dev"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  session({
    secret: "ОченьОченьСекретноеСлово",
    store: new fileStore(),
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false
  })
);

app.use(express.json());
app.use(express.urlencoded({extend: false}));
app.use(express.static(path + "/public"));



require('./config-passport');
app.use(passport.initialize());
app.use(passport.session());


app.post('/login',(req,res,next)=>{
    passport.authenticate('local',function (err,user) {
        if(err){
            return next(err);
        }
        if(!user){
            return res.redirect('/');
        }
        req.logIn(user,function (err) {
            if(err){
                return next(err);
            }
            if(user.role === 'admin') {
                return res.redirect('/admin');
            }
            if(user.role === 'user'){
                return res.redirect('/home');
            }
        });
    })(req,res,next);
});

const auth = (req,res, next) => {
    if(req.isAuthenticated() && req.user.role === 'user'){
        next()
    }else{
        return res.redirect('/login')
    }
};

const adminAuth = (req,res,next) => {
    if(req.isAuthenticated() && req.user.role == 'admin'){
        next()
    }else{
        return res.redirect('/404')
    }
};

app.post('/add_file', upload.array('kek', 12), function (req, res, next) {
    console.log(req.files[0].mimetype);
});

app.get("/login", (req, res) => res.sendFile(path + "/login.html"));

app.get("/", (req, res) => res.redirect("/home"));

app.get("/home", auth, (req, res) => {
  res.sendFile(path + "/user_main.html");
});

app.get('/upload',auth , (req,res) => {
    res.sendFile(path + "/add.html");
});

app.get("/documents", auth, (req, res) => {
  res.sendFile(path + "/criterion.html");
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.get('/admin',adminAuth, (req,res)=>{
    res.sendFile(path + "/admin.html");
});

app.get('/processed',adminAuth, (req,res)=>{
    res.sendFile(path + '/processed.html');
});

app.get('/rating',adminAuth, (req,res)=>{
    res.sendFile(path+'/rating.html');
});

app.get('*', function(req, res){
    res.sendFile(path + "/404.html");
});

app.listen(port, ()=> console.log('Example app listening on port ' + port));