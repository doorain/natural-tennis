var express = require('express');
var bodyParser =  require('body-parser');
var cors =  require('cors');
var session =  require('express-session');

var config = require('./config.js')
var app = express();



app.use(bodyParser.json());
app.use(cors(corsOptions));



app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: true,
  resave: true
}))


app.listen(config.port, function(){
  console.log('I got you BABY' + config.port);
})
