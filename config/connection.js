var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 6669,
  host: 'localhost',
  user: 'root',
  database: 'burgers_db'
});

module.exports.localConnect = mysql;