var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/catapp", { useMongoClient: true });

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil"
// });

// george.save(function(err, cat){
//   if(err){
//     console.log("Something went wrong");
//   } else {
//     console.log("We just saved a cat to the DB");
//     console.log(cat);
//   }
// });

Cat.create({
  name: "Snow White",
  age: 15,
  temperament: "Bland"
}, function(err, cat){
  if(err){
    console.log(err);
  } else{
    console.log(cat);
  }
});


// retreive all cats from the DB and console.log each

Cat.find({}, function(err, cats){
  if(err){
    console.log("OH NO, ERROR");
    console.log(err);
  } else {
    console.log("ALL THE CATS...");
    console.log(cats);
  }
})