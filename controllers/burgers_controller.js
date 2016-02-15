var burger = require('../models/burger.js');
var express = require('express');
var router = require('router');
var y = express();


module.exports.burgers_controller = function(y){
  y.get('/', function(req,res){
    var data = {
      burger.showAll(function(z){
        var data = {
          showALL : z
        }
        res.render('index',{z});
      });
    });
  y.post('/new',function(req,res){
    burger.addBurger(req.body.burger_name, function(result){
      res.redirect('/');
    });
  });

y.post('/eaten/:burger_name'), function(req,res){
  burger.devour(req.params.burger_name,function(result){
    res.redirect('/');
  });
});
 
  
}

router.get('/index'), function(req,res){
theBurgers.showAll(function)
}
