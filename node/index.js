var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!david&jimmy9 9 999----'+process.env.NODE_ENV);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
