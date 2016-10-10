var app = require('../server.js');
var db = app.get('db');

module.exports= {

  getAll: function(req, res){
    db.all_products(function(err, products){
      if (!err){
        res.status(200).json(products);
      }
      else {
        res.send(err)
      }
    });
  },

}
