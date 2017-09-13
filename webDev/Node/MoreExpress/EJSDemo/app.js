var express = require("express");
var app = express();

// Route
app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

// Start Server
app.listen(3000, 'localhost', function(){
    console.log("SERVER STARTED ON PORT 3000")
});