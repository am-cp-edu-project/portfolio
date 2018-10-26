const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const passport = require('passport');
var path = require('path');
path = path.resolve('../frontend') + '/build';


const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extend: false}));
app.use(express.static(path + "/public"));

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
            return res.redirect('/home');
        });
    })(req,res,next);
});

const auth = (req,res, next) => {
    if(req.isAuthenticated()){
        next()
    }else{
        return res.redirect('/')
    }
};

app.get("/",(req,res) => res.sendFile(path + "/login.html"));

app.get('/home', auth , (req,res) => {
    res.sendFile(path + "/user_main.html");
});

app.get('/upload', auth , (req,res) => {
    res.sendFile(path + "/add.html");
});

app.get('/documents', auth , (req,res) => {
    res.sendFile(path + "/criterion.html");
});

app.get("/logout",(req,res) => {
    req.logout();
    res.redirect('/');
});

app.get('*', function(req, res){
    res.sendFile(path + "/404.html");
});

app.listen(port, ()=> console.log('Example app listening on port ' + port));