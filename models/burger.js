// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgersFun = {
  dislplayAll: function(cb) {
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
  updateDev: function(dev, id,  cb) {
    orm.updateDev(dev, id,  function(res) {
      cb(res);
    });
 
// Export the database functions for the controller Controller.js).
module.exports = burgersFun;