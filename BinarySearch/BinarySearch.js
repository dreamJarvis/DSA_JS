/*
	704. Binary Search
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let s=0, e=nums.length-1;
	while(s <= e) {
		const mid = Math.floor((s+e)/2);

		if(nums[mid] === target)	return mid;
		else if(nums[mid] > target) {
			e = mid-1;
		}
		else {
			s = mid+1;
		}
	}

	return -1;
};

// driver function
function main() {
	// const nums = [-1,0,3,5,9,12], target = 9;
	const nums = [-1,0,3,5,9,12], target = 2;

	console.log(search(nums, target));
}
main();