function factorial(n) {
	let result = 1;
	for(let num = n; num >= 1; num--) {
		result *= num;
	}

	return result;
}

console.log(factorial(3));