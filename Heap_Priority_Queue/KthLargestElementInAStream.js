import { MinHeap } from "./Heap.js";

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = new MinHeap();
    this.k = k;
    nums.forEach((num) => this.add(num));
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
	this.minHeap.insert(val);

	while(this.minHeap.size() > this.k) {
		this.minHeap.remove();
	}

	return this.minHeap.top();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
function main() {
    const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    console.log(kthLargest.add(3)); // return 4
    console.log(kthLargest.add(5)); // return 5
    console.log(kthLargest.add(10)); // return 5
    console.log(kthLargest.add(9)); // return 8
    console.log(kthLargest.add(4)); // return 8
};
main();