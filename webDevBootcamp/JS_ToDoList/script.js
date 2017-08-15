var todos = ["Turtles"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list") {
		console.log(todos);
	} else if(input === "new") {
		todos.push(prompt("What would you like to add?"));
	}
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT");
