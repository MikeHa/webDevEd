// create secret number
var randomNumber = Math.floor(Math.random() * 1000);

//ask user for guess
var guess = prompt("Guess a number");

// chef if guest is right.
if (Number(guess) === randomNumber) {
	alert("You got it right!");
}

// check if higher
else if (Number(guess) > randomNumber) {
	alert("Too high guess again");
}

else {
	alert("Too low, guess again");
}
// check if lower
