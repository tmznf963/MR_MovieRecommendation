var express = require('express');
var app = express();

//public = 폴더 이름
app.use(express.static('public'));

//홈
app.get('/',function(req, res){
  res.send('Hello home page');
});

app.get('/login',function(req, res){
  res.send('Login please');
});

app.listen(3000,function(){
  console.log('Conneted 3000 port!');
});
