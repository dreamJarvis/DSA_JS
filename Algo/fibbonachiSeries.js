/*
	TC: O(N)
	SC: O(N)
*/
function fibbonachi(n) {
	let fib = [0, 1]

	for(let itr = 2; itr < n; itr++) {
		fib[itr] = fib[itr-1] + fib[itr-2];
	}

	return fib;
}


/*
	TC: O(N)
	SC: O(1)
*/
function nthFibbonachi(n) {
	let a = 0;
	let b = 1;

	if(n == 1)	return a;
	if(n == 2)	return b;

	for(let itr = 3; itr <= n; itr++) {
		const temp = a + b;
		a = b;
		b = temp;
	}

	return b;
}

// console.log(fibbonachi(10));
console.log(fibbonachi(13));
// console.log(fibbonachi(33));

// console.log(nthFibbonachi(10));
console.log(nthFibbonachi(7));