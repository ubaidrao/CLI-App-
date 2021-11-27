var express = require('express');
var app = express();
app.route('/Node').get(function(req,res)
{
    res.send("Tutorial on Node");
});
app.route('/Angular').get(function(req,res)
{
    res.send("Tutorial on Angular");
});
app.get('/',function(req,res){
    res.send('Welcome to DSC Pakistan Tutorials');
});


var server = app.listen(8081, function () {
       var host = server.address().address
       var port = server.address().port
       
//     //    console.log("Example app listening at http://%s:%s", host, port)
    })  
    

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello kia bat hai');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send('Hello World!');
});
var server=app.listen(function() {})



var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Love!');
  
}).listen(3001);