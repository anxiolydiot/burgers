var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  burger.showAll(function(burger_data){
    res.render('index', {burger_data});
  });
});



module.exports = router;