/*
	287. Find the Duplicate Number
*/
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/*
	linked-list problem,
	solved using floyd's algorithm
*/
var findDuplicate = function(nums) {
	let slowPtr = nums[nums[0]];
	let fastPtr = nums[slowPtr];

	// point of intersection
	while(fastPtr !== slowPtr) {
		slowPtr = nums[slowPtr];
		fastPtr = nums[nums[fastPtr]];
	}

	let aPtr = nums[0];
	let bPtr = slowPtr;
	while(aPtr !== bPtr) {
		aPtr = nums[aPtr]; 
		bPtr = nums[bPtr];
	}

	return aPtr;
};

function main() {
	// const nums = [1,3,4,2,2];
    // const nums = [3,1,3,4,2];
    const nums = [1,3,4,2,2];

	console.log(findDuplicate(nums));
};
main();