// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgersFun = {
  displayAll: function(cb) {
    orm.displayAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  addBurger: function(burgerName, cb) {
    orm.addBurger(burgerName, function(res) {
      cb(res);
    });
  },
  updateDev: function(devoured, id,  cb) {
    orm.updateDev(devoured, id,  function(res) {
      cb(res);
    });
  }
};
 
// Export the database functions 
module.exports = burgersFun;
