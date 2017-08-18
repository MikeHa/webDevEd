var p1Count = -10;

while (p1Count <= 19) {
	console.log(p1Count);
	p1Count++;
}


var p2Count = 10;
while (p2Count <= 40) {
	console.log(p2Count);
	p2Count+=2;
}

var p3Count = 300;
while (p3Count <= 333) {
	if ((p3Count % 2) != 0) {
		console.log(p3Count);
	}
	p3Count++;
}

var p4Count = 5;
while (p4Count <= 50){
	if ((p4Count % 3 == 0 || p4Count % 5 == 0)) {
		console.log(p4Count);
	}
	p4Count++;
}

// For Loops Answers

for(i=-10;i<=19;i++) {
	console.log(i);
}

for(i=10; i<=40; i+=2){
	if(i%2 == 0) {
		console.log(i);
	}
}

for(i=300; i<=333; i++) {
	if(i%2 != 0) {
		console.log(i);
	}
}

for(i=5; i<=50; i++) {
	if (i%5 == 0 || i%3 == 0){
		console.log(i);
	}
}
