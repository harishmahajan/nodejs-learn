var mysql = require("mysql");

var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root123",
        database: "myDatabase"
});

con.connect(function(err){
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql,function(err,res){
        console.log("result:- ",JSON.stringify(res));
    });
});