const orm = require("../config/orm");

const burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    newBurger: function (columns, values, cb) {
      orm.insertOne("burgers", columns, values, function(res) {
        cb(res);
      });
    },
    updateBurger: function (setColumn, devoured, whereColumn, id, cb) {
      orm.updateOne("burgers", setColumn, devoured, whereColumn, id, function(res) {
        cb(res);
      });
    },
    delete: function(whereColumn, id, cb) {
      orm.delete("burgers", whereColumn, id, function(res) {
         cb(res)
      })
   }
  };
    
module.exports = burger;