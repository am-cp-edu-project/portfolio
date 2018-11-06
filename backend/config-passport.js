const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/admin', {useNewUrlParser: true})
const connection = mongoose.connection
connection.on('error', function () {
  console.log('Ошибка')
})
connection.once('open', function () {
  console.log('Users - success')
})

const userSchema = mongoose.Schema({
  Login: String,
  Password: String,
  Role: String,
  LastName: String,
  FirstName: String,
  Patronymic: String,
  AverageMark: Number,
  Achievement: [String]
})


var User = connection.model('User', userSchema)




passport.serializeUser(function (user, done) {
  console.log('Сериализация', user)
    done(null, user._id)
})

passport.deserializeUser(function (id, done) {
  console.log('Десериализация', id)
  User.findOne({_id: id}, function (err, user) {
    if (err) {
      console.log(err.name)
      return
    }
    if (!user) {
      console.log('lwdlw')
      userDB = false
    }
    else {
      userDB = user
    }
  })
  done(null, userDB)
})

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({Login: username}, function (err, user) {
      if (err) {
        console.log(err.name)
          return
      }
      if (!user) {
        console.log('local')
          return done(null, false)
      }
      console.log(user)
        if (password = user.Password) {
        userDB = user
          return (done(null, userDB))
        }
      return done(null, false)
      })
    })
)



/*create_user= function(user){
  var newUser = new User({
      Login: userDB.username,
      Role: "user",
      Password: user.pass,
      LastName:user.last_name,
      FirstName:user.first_name,
      Patronymic:user.patronymic,
      AverageMark: user.average_mark,
      Achievement:[]
  });
    newUser.save()
        .then(function(doc){
            console.log("Сохранен объект", doc);
        })
        .catch(function (err){
            console.log(err);
        });

};
*/
module.exports.update = function (ach_id, user_id) {
  var arr = new Array()
  User.findOne({_id: user_id}, function (err, user) {
    if (err) {
      console.log(err.name)
      return;
    }
    arr = user.Achievement
     User.update({_id: user_id},
      {Achievement: arr}, function (err) {
        if (err)
          {return console.log(err);}
      })
  })
}
