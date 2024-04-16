/*
	153. Find Minimum in Rotated Sorted Array
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let s = 0, e = nums.length - 1;

    while (s < e) {
        let m = Math.floor((s + e) / 2)

        if (nums[m] > nums[e]) s = m + 1
        else e = m
    }

    return nums[e]
};

// driver function
function main() {
	// const nums = [1];
	// const nums = [2, 1];
	const nums = [3,4,5,1,2];
	// const nums = [11,13,15,17];
	// const nums = [4,5,6,7,0,1,2];
	console.log(findMin(nums));
};
main();