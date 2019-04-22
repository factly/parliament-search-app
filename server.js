// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// init sqlite db
var fs = require('fs');
var ls_with_ministers = fs.readFileSync('./ls_with_ministers.json');
var data = JSON.parse(ls_with_ministers);

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get('/lok_sabha', function(request, response) {
  
  response.send(JSON.stringify(data));
});

// listen for requests :)
var listener = app.listen(9000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
