/*
	method 2 : bit
	tc: O(1)
	sc: O(1)
*/
function powerOf2Log(num) {
	if(num < 1)	return false;
	return Math.floor(Math.log2(num)) === Math.ceil(Math.log2(num))
}  

/*
	method 2 : bit
	tc: O(1) 
	sc: (1)
*/
function powerOf2Bits(num) {
	if(num < 1)	return false;
	return (num & (num-1)) === 0; 
}

/*
	method 1
*/
function powerOf2(num) {
	if(num < 1)	return false;

	while(num > 1) {
		if(num%2 !== 0) return false;
		num = num/2;
	}

	return true;
}

// console.log(powerOf2(20));    
console.log(powerOf2Bits(12));
console.log(powerOf2Log(16));