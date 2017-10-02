var express = require("express");
var app = express();

// Routes

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// Visiting Animals

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        bear: "Rawr",
        wolf: "howl"
    };
    var sound = sounds[animal];    

    res.send("The " + animal + " says '" + sound + "'");

});

// Multiple Strings

app.get("/repeat/:str/:num", function(req, res){
    var str = req.params.str + " ";
    var num = Number(req.params.num);
    res.send(str.repeat(num));

    // var result = "";
    // for (var i = 0; i < num; i++){
    //     result += str + " ";
    // }
    // res.send(result);

});

// * page

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

// Start Server

app.listen(3000, 'localhost', function(){
    console.log("Listening on Port 3000!")
});