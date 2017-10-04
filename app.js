var http = require('http');
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    console.log("hello harish, this is my first program");
    res.end(); //end the response
  }).listen(8080);