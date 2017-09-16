var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "EJS");

var campgrounds = [
  { name: "Bear Lake", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg" }, 
  { name: "Tanker Hill", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg" }, 
  { name: "Buttercake Ranch", image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg" },
  { name: "Bear Lake", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg" }, 
  { name: "Tanker Hill", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg" }, 
  { name: "Buttercake Ranch", image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg" },
  { name: "Bear Lake", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg" }, 
  { name: "Tanker Hill", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg" }, 
  { name: "Buttercake Ranch", image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg" }
];

app.get("/", function(req, res){
  res.render("landing");
})

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds:campgrounds});
})

app.post("/campgrounds", function(req, res){
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  // redirect back to campgrounds page
  res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res){
  res.render("new");
})

app.listen(3000, 'localhost', function(){
  console.log("LISTENING ON PORT 3000");
})