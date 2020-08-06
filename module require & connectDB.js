const express = require('express');
var app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

var postman=require('postman');
var mysql = require('mysql');
// set the connection  parameters
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"node-test",
    multipleStatements: true // use to allow done query that have multiple statement sperats with ;
});
//do the connection
con.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
});
//start Express server and make it listen to Port:3000 
app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));
// export main connection and express objects for use it in other project parts
module.exports={con,app};