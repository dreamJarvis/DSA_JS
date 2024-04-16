/*
	128. Longest Consecutive Sequence
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
	let mp = new Map();
	for(let item of nums) mp.set(item, 1);


	let maxLen = 0;

	for(let [key, value] of mp) {
		if(mp.has(key-1))	continue;

		let itr = 1;
		while(mp.has(key+itr)) itr++;

		maxLen = Math.max(maxLen, itr);
	}
	
	return maxLen;
};

// Driver function
function main() {
	const nums = [100,4,200,1,3,2];
	// const nums = [0,3,7,2,5,8,4,6,0,1];
	// const nums = [3,2,0,4,1];
	// const nums = [0, 0];
	// const nums = [9,1,4,7,3,-1,0,5,8,-1,6];

	console.log(longestConsecutive(nums));
}

main();

/*
[9,1,4,7,3,-1,0,5,8,-1,6]
*/