/*
	78. Subsets
	https://leetcode.com/problems/subsets/description/
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsRecursive = function(nums) {
	const n = nums.length;
	const result = [];
	const util = (nums, subset, idx) => {
		if(idx === n)	{
			result.push(subset);
			return;
		}

		let temp = [...subset, nums[idx]];
		return util(nums, temp, idx+1) || util(nums, subset, idx+1);
	}
	util(nums, [], 0);
	return result;
};

var subsetsIterative = function(nums) {
	const n = nums.length;
	let stack = [[]];
	let index = 0;

	while(index < n) {
		const k = stack.length;
		for(let i=0; i<k; i++)
			stack.push([...stack[i], nums[index]]);
		index++;
	}

	return stack;
};

// driver function
function main() {
	const nums = [1,2,3];
	// const nums = [0];
	console.log(subsetsRecursive(nums));
};
main();