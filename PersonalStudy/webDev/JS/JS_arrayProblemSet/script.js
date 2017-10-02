// printReverse()
function printReverse(arr){
	for(var i = arr.length-1; i >= 0; i--){
		console.log(arr[i]);
	}
}

// isUniform() - INCOMPLETE // TRUE SHOWING UNDEFINED.  FINDOUT WHY
// Working Now.  return True needed to be outside the scope of the for loop.
function isUniform(arr){
	var firstItem = arr[0];
	for(var i = 0; i <= arr.length-1; i++) {
		if(arr[i] !== firstItem) {
			return false;
		}
	}
	return true;
}

// sumArray()
function sumArray(arr){
	var sum = 0;
	for(var i = 0; i <= arr.length-1; i++) {
		sum += arr[i];
	}
	return sum;
}
// sumArray() refactored with forEach
function sumArrayAgain(arr){
	var sum = 0;
	arr.forEach(function(element){
		sum += element;
	});
	return sum;
}

// max()
function max(arr){
	var counter = arr[0];
	for(var i = 0; i <= arr.length-1; i++) {
		if(arr[i] > counter) {
			counter = arr[i];
		}
	}
	return counter;

}

// max() refactored with forEach
function maxAgain(arr){
	var counter = arr[0];
	arr.forEach(function(element){
		if(element > counter) {
			counter = element;
		}
	});
	return counter;
}
