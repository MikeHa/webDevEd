var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", { useMongoClient: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "EJS");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Tanker Hill", 
//     image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"
//   }, function(err, campground){
//     if(err){
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAMPGROUND");
//       console.log(campground);
//     }
//   });

app.get("/", function(req, res){
  res.render("landing");
})

app.get("/campgrounds", function(req, res){
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
    res.render("campgrounds", {campgrounds:allCampgrounds});
    }
  })


})

app.post("/campgrounds", function(req, res){
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  })
  // redirect back to campgrounds page
})

app.get("/campgrounds/new", function(req, res){
  res.render("new");
})

app.listen(3000, 'localhost', function(){
  console.log("LISTENING ON PORT 3000");
})