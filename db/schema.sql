DROP DATABASE IF EXISTS burgers_db;

CREATE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
 id int NOT NULL AUTO_INCREMENT,
 burger_name VARCHAR(30) NOT NULL,
 devoured BOOLEAN NOT NULL default false,
 PRIMARY KEY (id)
);