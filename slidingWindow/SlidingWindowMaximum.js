/*
	239. Sliding Window Maximum
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var maxSlidingWindow = function(nums, k) {
    const q = [];  // stores *indices*
    const res = [];
    let left=0;

    for (let right = 0; right < nums.length; right++) {
        while (q && nums[q[q.length - 1]] <= nums[right])
            q.pop();
        q.push(right);

		// remove first element if it's outside the window
        if (left > q[0]) {
            q.shift();
        }

        // move the window forward when (right - left + 1) >= k
        if((right-left+1) >= k) {
			res.push(nums[q[0]]);
        	left++;
        }
    }
    return res; 
};

function main() {
	const nums = [1,3,-1,-3,5,3,6,7], k = 3;
	console.log(maxSlidingWindow(nums, k));
};
main();