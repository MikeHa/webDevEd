
var response = prompt("Are we there yet?").toLowerCase();

while(response.indexOf("yes") === -1 && response.indexOf("yeah") === -1) {
	response = prompt("Are we there yet?");
}

alert("Yay, we made it!");
