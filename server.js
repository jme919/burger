var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory 
app.use(express.static("public"));



// parse application/
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());



//setup handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes 
var routes = require("./controllers/burgers_controller.js");


app.use(routes);




app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
