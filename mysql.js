var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jack123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query('create database myDatabase', function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});

// Follow this steps

// 1) npm install mysql

// 2) npm mysql.js

