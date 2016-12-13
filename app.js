var express = require('express');
var config = require('./config');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(config.indexFile);
});

app.get('*', function (req, res) {
  res.sendFile(config.altFile);
});

app.listen(config.port, function () {
  console.log('Example app listening on port '+config.port);
});