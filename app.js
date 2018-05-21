var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var MySQLStore = require('express-mysql-session')(session);
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


//public = 폴더 이름
app.use(express.static('public'));

//post방식 하려면 bodyParser 필요
app.use(bodyParser.urlencoded({ extended:false}));

//passport
app.use(passport.initialize());
app.use(passport.session());

//passport설정
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {//유저가 없을때
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {//패스워드가 다를
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//passport route
app.post('/login',       //local전략을 실행하겠다(ex페북,카카오,네이버...)
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

//홈
app.get('/',function(req, res){
  res.send('Hello home page');//화면출력
});

app.get('/login',function(req, res){
  res.send('Login please');
});


//3000번 포트, 콘솔창 아웃풋
app.listen(3000,function(){
  console.log('Conneted 3000 port!');
});
