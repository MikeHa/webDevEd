// Movies as objects of an array

var movies = [
    {
        title: "God's Not Dead",
        hasWatched: true,
        rating: "5"
    },
    {
        title: "Aladdin",
        hasWatched: true,
        rating: "4.5"
    },
    {
        title: "Wonderwoman",
        hasWatched: false,
        rating: "3"
    },
    {
        title: "Some Scary Movie",
        hasWatched: false,
        rating: "0"
    }
];

// IFEE and a forLoop with a long string.  forLoops process quicker than forEach in larger applications.
(function movieHistory (){
    for(var i = 0; i < movies.length; i++){
        if (movies[i].hasWatched){
            var watchedQuestion = "watched";
        } else {
            var watchedQuestion = "not seen";
        }
        console.log("You have " + watchedQuestion + ' "' + movies[i].title + '"' + " - " + movies[i].rating + " stars");  // Statement about each movie)
    }
})();


// forEach Loop with a result variable

function buildString(movie){ // Refactored function
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function(movie){
    console.log(buildString(movie));
});