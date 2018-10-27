const passport = require('passport');
const LocalStategy = require('passport-local').Strategy;

const userDB = {
    id : 1,
    username : 'username',
    password : 'password'
};

passport.serializeUser(function (user, done) {
    console.log("Сериализация", user );
    done(null,user.id);
});

passport.deserializeUser(function (id,done) {
    console.log("Десериализация", id);
    const user = (userDB.id === id) ? userDB : false;
    done(null, user.id);
});

passport.use(
    new LocalStategy(function (username, password, done) {
        if(username === userDB.username && password === userDB.password){
            return done(null, userDB)
        } else{
            return done(null, false)
        }
    })
);