'use strict'

var express = require("express");

var app = module.exports = express()

app.get('/', function(req, res){
  res.send('Hello World continous deployment for GKE once again twice again!!!');
});


if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}