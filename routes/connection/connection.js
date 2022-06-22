var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'macro'
});
 
connection.connect();
 
connection.connect(
    (err)=> {
        if(!err){console.log("Good conection");}
        else {console.log("Bad Connection");}
    }
);
 
connection.query("SELECT * FROM `riky&morty`",function(err,result){
    console.log(result);
})

connection.end();   