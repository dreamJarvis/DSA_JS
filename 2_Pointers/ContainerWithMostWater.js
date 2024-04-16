/*
	11. Container With Most Water
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let maxArea = 0;
	let left = 0, right = height.length-1;

	while(left < right) {
		const area = (right - left) * Math.min(height[left], height[right]);
		maxArea = Math.max(maxArea, area);

		if(height[left] < height[right])	left++;
		else								right--;
	}

	return maxArea;
};

/*
	Driver function
*/
function main() {
	// const height = [1,8,6,2,5,4,8,3,7];
	// const height = [1,1];
	const height = [0,0,0];

	console.log(maxArea(height));
// 	const a=1, b=4;
// 	console.log(Math.max(a, b));
};
main();