/*********************************************************************************
* BTI325 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: _____Jiaheng Wang_______ Student ID: _180562217__ Date: ___Sep 13, 2022_______
*
* Online (Cyclic) URL:
* _______________________________________________________
*
********************************************************************************/

const express = require("express"); // Include express.js module
var app = express();

var path = require("path"); // include module path to use __dirname, and functions

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost:8080)
//app.get("/", function(req,res){
app.get("/", (req,res) =>{
  let resText = "<span style='color:red';> Wang, Jiaheng (Joshua) - 180562217</span> <br> This is my homepage. </br>"
  resText += "<a href = './about'> Go to About page </a> <br>";
  resText += "<a href = './aboutFile'> Go to About File page </a> <br>";
  resText += " Happy Every day!!!"
  res.send(resText);
  //res.send("Hello World<br /><a href='/about'>Go to the about page</a>");
});

// setup another route to listen on /about
app.get("/about", function(req,res){
  var resText = "<h3> This is from <mark>route</mark>/About</h3>"
  resText += "<a href='/'> Home </a>";
  res.send(resText);
  //  res.send("<h3>About</h3>");
});

// setup another route to listen on /aboutFile
app.get("/aboutFile", function(req,res){
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

// setup another route to listen on /about
app.get("/about", function(req,res){
  var resText = "<h3> This is from <mark>route </mark> /About"
  resText += "<a href='/'> Home </a>";
  res.send(resText);
  //  res.send("<h3>About</h3>");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart); // call back function: a function parameter