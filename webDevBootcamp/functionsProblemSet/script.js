function isEven(num){
	return num%2 === 0
}

// function factorial(num){
// 	if (num === 0) {
// 		return 1;
// 	}
// 	return x * factorial(x-1);
// }

function factorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++) {
		result *= i;
	}
	return result;
}

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}
