exports = {

var connection = require('../config/connection.js');

var orm = {

var showAll : function(a,b){
  var currentTableData = 'SELECT * FROM burger_table;';
  connection.query(currentTableData, function(err,result){
    if (err) throw err;
    b(result);
  });
},

 var addsBurger: function(tableInput, nameInput, activeInput, cb) {  
      var s = 'INSERT INTO ' + tableInput + ' (name, active, visit_count) VALUES (?, ?, ?)';
      connection.query(s, [nameInput, activeInput, 0], function(err, result) {
      if (err) throw err;
      cb(result);
  });
},




// selectAll: function(tableInput, cb) {
//         var s = 'SELECT * FROM ' + tableInput + ';';
//         connection.query(s, function(err, result) {
//             if (err) throw err;
//             cb(result);
// }



// var newBurger : function(){
//   /// user picks burger <- as in write code for this event 
//    var mySQLQuery = "INSERT INTO burgers_db (burger_name) VALUES ('" + req.body.burgerdata + "');"; //burger data comes from the hhandlebars view
//    connection.query(mySQLQuery, function(err) {
//     if (err) {
//       throw err
//     }
//     res.redirect('/');
//   });
// },


// var devoured : function(){
//     /// user eats burger <- as in write code for this event 
//    var mySQLQuery = "delete from burgers_db (burger_name) VALUES ('" + req.body.eatdata + "')"; //burger data comes from the hhandlebars view
//    connection.query(mySQLQuery, function(err) {
//     if (err) {
//       throw err
//     }
//     res.redirect('/');
//   });
// });


// };

selectAll: function(tableInput, cb) {
        var s = 'SELECT * FROM ' + tableInput + ';';
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
}