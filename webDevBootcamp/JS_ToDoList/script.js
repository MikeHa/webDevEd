var todos = ["Turtles"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list") {
		console.log("**********")
		todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
		console.log("**********")
	} else if(input === "new") {
		todos.push(prompt("What would you like to add?"));
	} else if (input === "delete") {
		// ash for index for todo to be deleted
			var index = prompt('Enter index of todo to delete');
		// delete that todo
			todos.splice(index,1);
	}
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT");
