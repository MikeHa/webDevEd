var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/post", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Adorable Pet Carter!", author: "Mike"},
        {title: "Can you believe this yorkie!", author: "Brittany"}
    ];

    res.render("posts", {posts: posts});
});

// Start Server
app.listen(3000, 'localhost', function(){
    console.log("SERVER STARTED ON PORT 3000")
});