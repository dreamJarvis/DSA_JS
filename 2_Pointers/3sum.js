/*
	167. Two Sum II - Input Array Is Sorted
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const unqNums = nums;
	unqNums.sort((a, b) => a-b);

	const n = unqNums.length;
	const result = [];
	for(let i=0; i<n; i++) {
		const num1 = unqNums[i];
		let s = i+1, e = n-1;
		while(s < e) {
			const sum = num1 + unqNums[s] + unqNums[e]; 
			if(sum === 0) {
				result.push([num1, unqNums[s], unqNums[e]]);	
				while(s < e && result.slice(-1)[0][1] === nums[s])	s++;
				while(s < e && result.slice(-1)[0][2] === nums[e])	e--;
			}
			else if(sum < 0)	s++;
			else	e--;
		}

		while(i+1 < n && unqNums[i] === unqNums[i+1]) i++;
	}

	return result;
};


/*
	Driver function
*/
function main() {
	const nums = [-1,0,1,2,-1,-4];
	// const nums = [0,1,1];
	// const nums = [0,0,0];
	// const nums = [0,0,0,0];

	console.log(threeSum(nums));
};
main();