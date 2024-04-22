import {MaxHeap} from './Heap.js';

/*
	215. Kth Largest Element in an Array
	https://leetcode.com/problems/kth-largest-element-in-an-array/description/
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
	const maxHeap = new MaxHeap();
	nums.forEach((num) => maxHeap.insert(num));

	k--;
	while(k--) {
		maxHeap.remove();
	}

	return maxHeap.top();
};

// driver function
function main() {
	// const nums = [3,2,1,5,6,4], k = 2;
	const nums = [3,2,3,1,2,4,5,5,6], k = 4;

	console.log(findKthLargest(nums, k));
}
main();