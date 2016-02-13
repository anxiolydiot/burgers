exports = {

var connection = require('connection.js');


var newBurger : function(){
  /// user picks burger <- as in write code for this event 
   var mySQLQuery = "INSERT INTO burgers_db (burger_name) VALUES ('" + req.body.burgerdata + "')"; //burger data comes from the hhandlebars view
   connection.query(mySQLQuery, function(err) {
    if (err) {
      throw err
    }
    res.redirect('/');
  });
});


var devoured : function(){
    /// user eats burger <- as in write code for this event 
   var mySQLQuery = "delete from burgers_db (burger_name) VALUES ('" + req.body.eatdata + "')"; //burger data comes from the hhandlebars view
   connection.query(mySQLQuery, function(err) {
    if (err) {
      throw err
    }
    res.redirect('/');
  });
});


};