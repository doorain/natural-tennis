var app = require('../../server.js');
var db = app.get('db');

module.exports= {

  getProducts: function(req, res){
    db.get_products(function(err, products){
      if (!err){
        res.status(200).json(products);
      }
      else {
        res.send(err)
      }
    });
  },
  newProduct: function(req, res, next) {
    console.log(req.body);
    var r = req.body;
    db.new_product([r.id, r.title, r.name, r.price, r.description, r.color, r.quantity], function(err, r) {
      if (err) {
        console.log(err)
        return res.status(500).send();
      }
      res.status(200).json(r);
    })
  },

}
