var connection = require("../config/connection");


var orm = {
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err,result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, columns, values, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";
  
        connection.query(queryString, values, function (err, result) {
           if (err) {
              throw err;
           }
           console.log("ormRes " + result);
           cb(result);
        });
    },
    updateOne: function (table, setColumn, devoured, whereColumn, id, cb) {
        var queryString = "Update " + table + " Set " + setColumn + " = " + devoured + " where " + whereColumn + " = " + id + ";";
        connection.query(queryString, function (err, result) {
                if (err) throw err;
                callback(result);
            });
    },
    delete: function (table, whereColumn, id, cb) {
        var queryString = "Delete From " + table + " where " + whereColumn + " = " + id + ";";
        connection.query(queryString, function (err, result) {
           if (err) {
              throw err;
           }
           cb(result);
        });
     }
};


module.exports = orm;