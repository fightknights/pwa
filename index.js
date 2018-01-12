var express = require('express');
var app = express();
const path = require('path');

var port = (process.env.PORT || process.env.VCAP_APP_PORT || 3000);

var endpoints = [];

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

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.post('/api/save-subscription/', function (req, res) {
    // Check the request body has at least an endpoint.
    if (!req.body || !req.body.endpoint) {
      // Not a valid subscription.
      res.status(400);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        error: {
          id: 'no-endpoint',
          message: 'Subscription must have an endpoint.'
        }
      }));
    } else {
      endpoints.push(req.body);

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ data: { success: true } }));
    }
});

app.get('/api/send-push', function (req, res) {
  res.json(endpoints);
});

app.listen(port, function(){
  console.log('Node app is running on port', port);
});
