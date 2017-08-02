age = prompt("What is your age?")

if (age < 0) {
	console.log("You cant have a negative age");
}
else if (Math.sqrt(age) % 1 == 0) {
	console.log("Your age is a perfect square");
}
else if(age < 18) {
	console.log("Sorry, you aren't old enough to enter the venue");
}
else if (age < 21) {
	console.log("You can enter, but you can't drink");
}
else if (age == 21) {
	console.log("Happy 21st birthday!");
}
else if (age%2 == 1) {
	console.log("Your age is odd!");
}
else {
	console.log("Come on in, you can drink!");
}
