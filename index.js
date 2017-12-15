var express = require('express');
var app = express();
const path = require('path');

var port = (process.env.PORT || process.env.VCAP_APP_PORT || 3000);

app.enable('trust proxy');

app.use (function (req, res, next) {
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect('https://' + req.headers.host + req.url);
  }
});

app.use(express.static(__dirname + '/dist'));

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, function(){
  console.log('Node app is running on port', port);
});
