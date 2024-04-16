/*
	347. Top K Frequent Elements
*/

var topKFrequent = function(nums, k) {
	let mp = new Map();
	for(const item of nums) {
		if(mp.has(item)) {
			const count = mp.get(item);
			mp.set(item, count+1);
		} else {
			mp.set(item, 1);
		}
	}

	let arr = [];
	for(const [key, value] of mp) {
		arr.push([key, value]);
	}

	arr.sort((a, b) => b[1] - a[1]);

	let res = [];
	for(let i = 0; i < k; i++) {
		res.push(arr[i][0]);
	}

	return res;
};

// Driver function
function main() {
	const nums = [1,1,1,2,2,3,4,5,5,5,5]; 
	const k = 2

	console.log(topKFrequent(nums, k));
};
main();