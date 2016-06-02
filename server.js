var express = require('express');
var app  = express();
var path = require('path');
var adminRouter = express.Router();

adminRouter.get('/', function(req, res) {
   res.send('I am the dashboard!');
 });

 adminRouter.get('/users/:name', function(req, res) {
  res.send('hello ' + req.params.name + '!');
  });

 adminRouter.get('/posts', function(req, res) {
   res.send('I show all the posts!');
 });

app.use('/admin', adminRouter); //recupere les routes

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337); // sorry
console.log('1337 is the magic port!');

// La methode 'traditionnelle';

// var http = require('http'),
//  fs = require('fs');
//
// http.createServer(function(req, res) {
//
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//     'Access-Control-Allow-Origin' : '*'
// });
//
// var readStream = fs.createReadStream(__dirname + '/index.html');
//
//
//  readStream.pipe(res);
// }).listen(1337);
//
// console.log('Visit me at http://localhost:1337');
