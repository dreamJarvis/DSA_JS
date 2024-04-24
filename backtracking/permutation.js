/*
	46. Permutations
	https://leetcode.com/problems/permutations/description/
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	const n = nums.length;
	const result = [];
	const set = new Set();

	const util = (temp) => {
		if(temp.length === n) {
			result.push([...temp]);
			return;
		}

		for(const num of nums) {
			if(set.has(num))	continue;
			temp.push(num);
			set.add(num);
			util(temp);
			set.delete(temp.pop());
		}
	}
	util([]);

	return result;
};

// driver function
function main() {
	const nums = [1, 2, 3];
	console.log(permute(nums));
};
main();