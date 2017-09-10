var todos = ["Turtles"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodo();
	} else if (input === "delete") {
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT");

function listTodos() {
	console.log("**********")
	todos.forEach(function(todo, i){
	console.log(i + ": " + todo);
});
	console.log("**********")
}

function addTodo() {
	todos.push(prompt("What would you like to add?"));
	console.log("Added to do")
}

function deleteTodo() {
	// ash for index for todo to be deleted
		var index = prompt('Enter index of todo to delete');
	// delete that todo
		todos.splice(index,1);
		console.log("Deleted todo");
}
