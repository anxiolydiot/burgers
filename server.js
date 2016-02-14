var express = require('express');
var overRide = require('method-override');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var connection = require('./connection.js').localConnect();
var PORT = process.env.NODE_ENV || 3306;
var app = express();
app.engine('handlebars', expressHandlebars({defaultLayout: 'noteslayout'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));

//routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/delete', routes);

//listen on 3306
app.listen(PORT);
