/**
 * Module dependencies.
 */
var express = require('express'),
    methodOverride = require('method-override'),
    path = require('path'),
    bodyParser = require('body-parser');

// create express instance
var app = express();

// static folder setup
app.use(express.static(path.join(__dirname, '/build/')));

// initialize authentication
// cors
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

    next();
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('*', function(req, res){
    res.sendFile(__dirname + '/build/index.html');
});

// listen
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'));