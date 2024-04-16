/*
	42. Trapping Rain Water
*/
/**
 * @param {number[]} height
 * @return {number}
 */

/*
var trap = function(height) {
	const n = height.length;
    let leftHigh = [];
    leftHigh[0] = height[0];
    for(let i=1; i<n; i++) {
    	// leftHigh[i] = Math.max() leftHigh[i-1] > height[i] ? i-1 : i;
    	leftHigh[i] = Math.max(leftHigh[i-1], height[i]);
    }

    let rightHigh = [];
    rightHigh[n-1] = height[n-1];
    for(let i=n-2; i>=0; i--) {
    	// rightHigh[i] = rightHigh[i+1] > height[i] ? i+1 : i;
    	rightHigh[i] = Math.max(rightHigh[i+1], height[i]);
    }

    // console.log(n);
    // console.log(leftHigh);
    // console.log(rightHigh);

    let totalWater = 0;
    for(let i=1; i<n-1; i++)
    	totalWater += (Math.min(leftHigh[i],rightHigh[i]) - height[i]);

    return totalWater;
};
*/

var trap = function(height) {
	const n = height.length;
	let left=0, right=n-1;
	let leftMax = height[0], rightMax = height[n-1];
	let s = 0, e = n-1;
	let totalWater = 0;

	while(left < right) {
		if(leftMax <= rightMax) {
			left++;
			if(leftMax <= height[left])
				leftMax = height[left];
			else
				totalWater += leftMax - height[left];
		}
		else {
			right--;
			if(rightMax <= height[right])
				rightMax = height[right];
			else
				totalWater += rightMax - height[right];
		}
	}

	return totalWater;
};

// driver function
function main() {
	const height = [0,1,0,2,1,0,1,3,2,1,2,1];
	console.log(trap(height));
};
main();