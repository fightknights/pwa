var express = require('express');
var app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000));

// app.use(function(req, res, next) {
//   if(!req.secure) {
//     return res.redirect(['https://', req.get('Host'), req.url].join(''));
//   }
//   next();
// });

app.use(express.static(__dirname + '/dist'));

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
});
