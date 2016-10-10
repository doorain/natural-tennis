var express = require('express');
var bodyParser =  require('body-parser');
var cors =  require('cors');
var session =  require('express-session');
var massive = require("massive");
var config = require('./config.js')
var connectionString = "postgres://postgres:@localhost/NaturalTennis"
var db = massive.connectSync({connectionString: connectionString});

var app = module.exports = express();
app.set('db', db)
var productsCtrl = require('./Ctrl/productsCtrl.js')

app.use(bodyParser.json());
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: true,
  resave: true
}))
// --------------------ENDPOINTS---------------------//
//===================================================//
app.get('/api/products', productsCtrl.getAll);


app.listen(config.port, function(){
  console.log('I got you BABY ');
})
