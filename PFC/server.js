var express = require("express");
var mongoose = require("mongoose");

var app = express();

var server = app.listen(3000, () => {
    console.log("server is running on port", server.address().port);
   });

app.use(express.static(__dirname));

var dbUrl = "mongodb+srv://rootuser04:publicclassV4@cluster0-lvfng.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbUrl , (err) => { 
    console.log("mongodb connected",err);
 })