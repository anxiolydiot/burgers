var connection = require('../config/connection.js');
var mysql= require("mysql");


module.exports= {
    showAll: function(table,b){
      var x = 'SELECT * FROM ' + table +';';
      connection.query(x, function(err,result){
        if (err) throw err;
        b(result);
      });
    },

    addsBurger: function(table,name,b) {  
      var x = "INSERT INTO " + table + " (burger_name) VALUES (?)";
      connection.query(x, [name], function(err, result) {
        if (err) throw err;
        b(result);
      });
    },

    devoured: function(table,id,b) {
      var x = "UPDATE " + table + " SET devoured = 1  WHERE id = ?";
      connection.query(x, [id], function(err, result) {
        if (err) throw err;
        b(result);
      
      });
    }
};


    
      

   


 
