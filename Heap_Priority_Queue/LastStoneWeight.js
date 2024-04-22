import { MaxHeap } from "./Heap.js";

/*
	1046. Last Stone Weight
	https://leetcode.com/problems/last-stone-weight/description/
*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
	const maxHeap = new MaxHeap();

	stones.forEach((stone) => maxHeap.insert(stone));

	while(maxHeap.size() > 2) {
		const stone1 = maxHeap.top();
		maxHeap.remove();
		const stone2 = maxHeap.top();
		maxHeap.remove();

		// console.log("stone1 : ", stone1, ", stone2: ", stone2);

		if(stone1 !== stone2) {
			maxHeap.insert(Math.abs(stone2 - stone1));
		}
	}

	if(maxHeap.size())	return maxHeap.top();
	return 0;	
};

function main() {
	// const stones = [2,7,4,1,8,1];
	const stones = [1];

	console.log(lastStoneWeight(stones));
};
main();
