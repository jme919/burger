var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgersFun = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgersFun.displayAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burgersFun.addBurger(req.body.name, function(result){
    console.log("A new burger has been added");
    res.status(200).end();
  });
});


router.put("/api/burgers/:id", function(req, res) {
  var id =  req.params.id;

  burgersFun.updateDev({
    devoured: req.body.devoured, id, function(result){
      if(result.changedRows == 0 ) {
        return res.status(404).end();
      }else{
        res.status(200).end();
      }
  }
  });
});

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burgersFun.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;