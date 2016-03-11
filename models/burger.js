var orm = require("../config/orm.js");


var burgerActions = {
showCurrent : function(b){
  orm.showAll("burger_table", function(res){
    b(res);
  });
},
addABurger: function(name,b){
  orm.addsBurger("burger_table",name,b);

},

eatsBurger: function(id,b){
  orm.devoured("burger_table",id,b);
}

};

module.exports = burgerActions;