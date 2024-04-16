/*
	1. Two Sum
*/
var twoSum = function(nums, target) {
	let visited = {};
	for(let i=0; i < nums.length; i++) {
		let remValue = target - nums[i];
		if(visited[remValue] !== undefined)	{
			const idx = visited[remValue]; 
			return [i, idx];
		}

		visited[nums[i]] = i;
	}

	return [];
};

// Driver function
function main() {
	const nums = [2,7,11,15]; 
	const target = 9;

	// const nums = [3,2,4]; 
	// const target = 6;
	
	// const nums = [3,3]; 
	// const target = 6;

	// const nums = [3, 2, 95, 4, -3]; 
	// const target = 92;

	// const nums = [0,3,-3,4,-1]; 
	// const target = -1;

	console.log(twoSum(nums, target));
};

main();