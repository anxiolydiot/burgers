var connection = require('../config/connection.js');


var orm = {

    showAll: function(table,b){
      var currentTableData = 'SELECT * FROM' +table+ ';';
      connection.query(query, function(err,result){
        if (err) throw err;
        b(result);
      });
    },

    addsBurger: function(table,name,b) {  
      var x = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
      connection.query(x, [name], function(err, result) {
        if (err) throw err;
        b(result);
      });
    },

    devoured: function(table,id,b){
      var x = "UPDATE " + table + " SET devoured = 1  WHERE id = ?";
      connection.query(x, [id]), function(err, result){
        if (err) throw err;
        b(result);
      };
    },
};


module.exports = orm;
 
