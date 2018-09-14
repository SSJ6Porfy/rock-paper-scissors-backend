var express = require('express');
var session = require("express-session");
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
const mongoose = require('mongoose');
var passport = require('passport');

// Set up the express app
var app = express();

let dev_db_url = 'mongodb://localhost:27017/gimme5';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('port', process.env.PORT || 8000);

app.use(session({ 
    secret: "myreallybigsecret",
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
  
// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});