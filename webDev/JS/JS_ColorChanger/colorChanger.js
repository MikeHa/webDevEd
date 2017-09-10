// Uses .classList.toggle to toggle CSS
document.querySelector("button").addEventListener("click", function () {
    document.body.classList.toggle("toggleBackground"); // toggles .toggleBackground from white to purple
});

// // Uses JS and an if statement
// var body = "white"; // Starting body background color, changes to purple when changeColor() is executed
// document.querySelector("button").addEventListener("click", function changeColor(){ // on click, run changeColor()
//     if (body == "white"){
//         document.body.style.background = "purple";
//         body = "purple";
//     } else {
//         document.body.style.background = "white";
//         body = "white";
//     }
// });

/* 
// Another Way
var btn = document.querySelector("button");
var isPurple = false; // boolean values

// Definition
function changeColor() {
    if (isPurple) {
        document.body.style.background = "white";
        // isPurple = false;
    } else {
        
        document.body.style.background = "purple";
        // isPurple = true;
    }
    isPurple = !isPurple;
}
btn.addEventListener("click", changeColor);
// document.querySelector("h1").addEventListener("click", changeColor);
*/