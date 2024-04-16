/*
	33. Search in Rotated Sorted Array
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
		
		if(nums[mid] >= nums[s]) {
			// look left of the middle
			if(target < nums[mid] && target >= nums[s])	e = mid-1;
			// else look to the right
			else	s = mid+1;
		} 
		else {
			// right of the middle
			if(target > nums[mid] && target <= nums[e])	s = mid+1;
			// else look left
			else	e = mid-1;
		}
	}

	return -1;
};

// Driver function
function main() {
	// const nums = [4,5,6,7,0,1,2], target = 0;
	// const nums = [3, 5, 1], target = 3;
	// const nums = [4,5,6,7,0,1,2], target = 3;
	// const nums = [1], target = 0;
	const nums = [1], target = 1;

	console.log(search(nums, target));
};
main();