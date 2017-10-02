var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
  res.send("Hi there!");
});

// "/bye" => "Goodbye"
app.get("/bye", function(req, res){
  res.send("Goodbye");
});

// "/dog" => "MEOW!
app.get("/dog", function(req, res){
  res.send("Meow!");
  console.log("Someone made a request to /dog")
});

app.get("/r/:subredditName", function(req, res) {
  var subreddit = req.params.subredditName.toUpperCase();
  res.send("WELCOME TO THE " + subreddit + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
  console.log(req.params);
  res.send("WELCOME TO THE COMMENTS PAGE");
});

app.get("*", function(req, res) {
  res.send("YOU ARE A STAR!");
});

// Tell Express to listen for request (start server)
app.listen(3000, 'localhost', function(){
  console.log("Example app listening on port 3000!");
});