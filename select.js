var mysql = require("mysql");

var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root123",
        database: "myDatabase"
});

con.connect(function(err){
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});