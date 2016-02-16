var orm = require("../config/orm.js");


var burgerActions = {
 showCurrent : function(a){
  orm.showAll(a);
},
addABurger: function(burger_name,a){
  orm.addsBurger(burger_name,a);

},

eatsBurger: function(burger_name,a){
  orm.devoured(burger_name,a);
}

};

modeule.exports = burgerActions;