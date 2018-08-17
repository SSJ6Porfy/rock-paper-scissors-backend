var express = require('express');
var session = require("express-session");
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var path = require('path');
var ejs = require('ejs');
var http = require('http');
var db = require('./server/models');

// Set up the express app
var app = express();

app.set('port', process.env.PORT || 8000);

app.use(session({ 
    secret: "myreallybigsecret",
    proxy: true,
    resave: true,
    saveUninitialized: true
  }));
  
// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

require('./server/routes')(app);

var MongoClient = require('mongodb').MongoClient, 
    assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/gimme5';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log(db);

  db.close();
});