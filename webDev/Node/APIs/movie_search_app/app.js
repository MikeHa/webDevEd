var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "EJS");

app.get("/results", function(req, res){
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;

  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("results", {data: data});
    }
  })
});

app.get("/", function(req, res){
  res.render("search");
});

app.listen(3000, 'localhost', function(){
  console.log("LISTENING ON PORT 3000");
})