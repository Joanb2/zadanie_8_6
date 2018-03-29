var a, b, value;
a = 2;
b = 3;
value = (a * a) - (2 * a * b) - (b * b);

console.log(value);

if (value < 0) {
	console.log("Negative results");
}

if (value === 0) {
	console.log("Value equals 0");
} else if (isNaN(value)){
	console.log("Not 0");
} else {
	console.log("Value is under 0");
}