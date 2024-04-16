/*
	167. Two Sum II - Input Array Is Sorted
*/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	let i = 0, j = numbers.length-1;

	while(i < j) {
		if(numbers[i] + numbers[j] === target)	return [i+1,j+1];
		if(numbers[i] + numbers[j] < target) i++;
		if(numbers[i] + numbers[j] > target) j--;
	}	

	return [];
};

/*
	Driver function
*/
function main() {
	// const numbers = [2,7,11,15], target = 9;
	// const numbers = [2,3,4], target = 6;
	// const numbers = [-1,0], target = -1;
	const numbers = [-1000,-1,0,1], target = 1;

	console.log(twoSum(numbers, target));
};
main();