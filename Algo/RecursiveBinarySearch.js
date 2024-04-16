/*
	Recursive Binary Search
*/
const util = (s, e, arr, target) => {
	if(s > e || e < 0 || s > arr.length-1)	return -1;
	const mid = Math.floor((s+e)/2);
	if(arr[mid] === target)	return mid;
	else if(arr[mid] > target)	return util(s, mid-1, arr, target);
	return util(mid+1, e, arr, target);
}

const rbs = (arr, target) => {
	return util(0, arr.length-1, arr, target);
}

// driver function
function main() {
	const arr = [1, 2, 3, 4, 5], target = 2;
	// const arr = [-1, 2, 3, 14, 24, 43, 55], target = 43;

	console.log(rbs(arr, target));
};
main();