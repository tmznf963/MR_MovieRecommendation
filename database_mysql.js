var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'mr'
});

//연결
conn.connect();
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

var sql ="SELECT * FROM";
conn.query(sql,function(err,rows,fields){
  if(err){
    console.log(err);
  }else{
    console.log('rows',rows);
    console.log('fields',fields);
  }
});

//접속 끝
conn.end();
