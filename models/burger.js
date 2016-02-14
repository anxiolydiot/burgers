var orm = require("./config/orm.js");


var burgerActions = {
 showCurrent : function(a){
  orm.showAll('burger_table', function(res){
    a(res)
  });
},
addABurger: function(name,a){
  orm.addsBurger('burger_table', name, a);

},

eatsBurger: function(id,a){
  orm.devoured('burger_table',1,id,a);
}

};

modeule.exports = burgerActions;