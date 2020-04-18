var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();
router.get("/", function(req,res) {
    burgers.selectAll(function (data) {
        var burgerObject = {
           burger: data
        };
        res.render('index', burgerObject);
     });
});

router.post("/api/burgers" , function(req,res) {
    burger.newBurger([
        "burger_name", "devoured"
     ], [
        req.body.burger_name, 0
     ], function (result) {
        console.log("burger_controller " + result)
        res.json({ burger_id: result.insertId })
     });
});

router.put("/api/burgers/:id", function(req,res) {
    var id = req.params.id;
   burger.updateBurger(
      [
         "devoured"
      ],
      [
         1
      ],
      [
         "burger_id"
      ],
      [
         id
      ],
      function (result) {
         if (result.changedRows === 0) {
            return res.status(404).end();
         }
         else {
            res.status(200).end();
         }
      });
});

module.exports = router;