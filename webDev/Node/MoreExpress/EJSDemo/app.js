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

app.get("/post", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Adorable Pet Carter!", author: "Mike"},
        {title: "Can you believe this yorkie!", author: "Brittany"}
    ];

    res.render("posts.ejs", {posts: posts});
});

// Start Server
app.listen(3000, 'localhost', function(){
    console.log("SERVER STARTED ON PORT 3000")
});