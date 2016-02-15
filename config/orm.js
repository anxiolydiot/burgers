var connection = require('../config/connection.js');

exports = {

var orm = {

var showAll : function(b){
  var currentTableData = 'SELECT * FROM burger_table;';
  connection.query(currentTableData, function(err,result){
    if (err) throw err;
    b(result);
  });
},

 var addsBurger: function(a,b) {  
      var x = 'INSERT INTO burger_table (burger_name, devoured) VALUES (?, ?);';
      connection.query(x, [a, false], function(err, result) {
      if (err) throw err;
      b(result);
  });
},

 var devoured : function(a,b){
  var x = 'UPDATE burger_table SET devoured=true WHERE burger_name=?';
  connection.query(x, [a]), function(err, result){
    if (err) throw err;
    b(result);
  });
  }
}

    

module.exports = orm;
 
