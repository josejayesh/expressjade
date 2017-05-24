var express = require('express');
var path = require('path');
var app = express();
var index = require('./router/index');
var city = require('./router/city');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.get('/', index.index);
app.use('/public', express.static('public'))
app.get('/:city',city.city);
var port = process.env.PORT || 8080;
var server = app.listen(port, function(req, res){
  console.log("listening to :"+port);
});
