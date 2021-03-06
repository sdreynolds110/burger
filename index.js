var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});