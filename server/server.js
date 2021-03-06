// Dependencies
// ============
var express        = require('express');
var path           = require('path');
var logger         = require('morgan');
var bodyParser     = require('body-parser');

// Express settings
// ================

// instantiate our app
var app            = express();

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

require('./routes')(app);

app.get('*', (req, res) => {
  var testHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
  res.sendFile(testHtmlPath);
})




// our module get's exported as app.
module.exports = app;


// Where's the listen? Open up bin/www, and read the comments.
