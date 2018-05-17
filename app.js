var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MySQLStore = require('express-mysql-session')(session);



//public = 폴더 이름
app.use(express.static('public'));

//post방식 하려면 bodyParser 필요
app.use(bodyParser.urlencoded({ extended:false}));

//홈
app.get('/',function(req, res){
  res.send('Hello home page');//화면출력
});

app.get('/login',function(req, res){
  res.send('Login please');
});

app.listen(3000,function(){
  console.log('Conneted 3000 port!');
});
