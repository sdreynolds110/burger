var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();
router.get("/", function(req,res) {
    burgers.selectAll(function(data) {
        res.render("index", {burgers: data})
    });
});

router.post("/api/burgers" , function(req,res) {
    const value = req.body.burger_name;
    burgers.insertOne(value, function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req,res) {
    const condition = req.params.id;
    burgers.updateOne(condition, function(result) {
        if (result,affectedRow === 0) {
              return res.status(404). end();
            } else {
              res.status(200).end();;
            }
    });
});

module.exports = router;