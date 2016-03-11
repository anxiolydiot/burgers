var express = require('express');
var overRide = require('method-override');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var router = require('./controllers/burgers_controller.js');
// var connection = require('../connection.js');
var PORT = process.env.NODE_ENV || 3000;
var app = express();
app.use(overRide('_method'));
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));
app.use("/static", express.static("public"));
// router.burgers_controller(app);
//routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/new', routes);
app.use('/eaten', routes);

//listen on 3306
app.listen(PORT, function(){
  console.log('Listening on %s', PORT);
});