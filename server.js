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

 adminRouter.get('/hello/:name', function(req, res) {
 res.send('hello ' + req.params.name + '!');
 });

 app.route('/login')
        //  (GET http://localhost:1337/login)
.get(function(req, res) {
res.send('this is the login form');
})
        //  (POST http://localhost:1337/login)
.post(function(req, res) { console.log('processing');
                res.send('processing the login form!');
});

// route middleware to validate :name
 adminRouter.param('name', function(req, res, next, name) {
// do validation on name here
// blah blah validation
 // log something so we know its working
 console.log('doing name validations on ' + name);

 // once validation is done save the new item in the req
 req.name = name;
 // go to the next thing
 next();
 });

// route with parameters (http://localhost:1337/admin/hello/:name)
 adminRouter.get('/hello/:name', function(req, res) {
res.send('hello ' + req.name + '!');
 });

app.use('/admin', adminRouter); //recupere les routes

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337);
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
