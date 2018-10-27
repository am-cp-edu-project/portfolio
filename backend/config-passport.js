const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin');
const connection = mongoose.connection;
connection.on('error', function () {
    console.log('Ошибка')
});
connection.once('open', function () {
    console.log('Users - success')
});

const userSchema = mongoose.Schema({
    Login:String,
    LastName:String,
    FirstName:String,
    Patronymic:String,
    AverageMark:Number,
    Achivement:[String]
});


var User = connection.model('User', userSchema);

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
    new LocalStrategy(function (username, password, done) {
        if(username === userDB.username && password === userDB.password){
            create_user();
            return done(null, userDB)
        } else{
            return done(null, false)
        }
    })
);


create_user= function(){
    var newUser = new User({
        Login: userDB.username,
        LastName:"Стулов",
        FirstName:"Серафим",
        Patronymic:"Акакьевич",
        AverageMark: "3.5",
        Achivement:[]
    });

    newUser.save()
        .then(function(doc){
            console.log("Сохранен объект", doc);
            mongoose.disconnect();  // отключение от базы данных
        })
        .catch(function (err){
            console.log(err);
            mongoose.disconnect();
        });

};