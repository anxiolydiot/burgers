var burger = require('../models/burger.js');
var orm = require("../config/orm.js");
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  orm.showAll(function(burger_data){
    res.render('index', {burger_data});
  });
});



module.exports = router;