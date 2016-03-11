var burgerActions = require('../models/burger.js');
var orm = require("../config/orm.js");
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  burgerActions.showCurrent(function(burger_data){
    res.render('burgers', {burger_data});
  });
});



module.exports = router;