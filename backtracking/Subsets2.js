/*
	90. Subsets II
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b);
    let track = [];
    let res = [];
    backtrack(0);
    return res;

    function backtrack(start){
        res.push([...track]);
        for(let i = start; i<nums.length; i++){
        	/*
				if the prev num is same as curr num, 
				then this iteration is going to give same subset as the previous one,
				and we dont want repeatables
        	*/
            if(start !== i && nums[i] === nums[i-1])	continue;
            track.push(nums[i]);
            backtrack(i+1)
            track.pop();
        }
    }
};

// driver
function main() {
	// const nums = [1,2,2];
	// const nums = [0];
	const nums = [4, 4, 4, 1, 4];
	console.log(subsetsWithDup(nums));
	return;
}
main();

/*
xample 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:

Input: nums = [0]
Output: [[],[0]]

[[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]
[[4,4,4,1,4],[4,4,4,1],[4,4,4,4],[4,4,4],[4,4,1,4],[4,4,1],[4,4],[4,1,4],[4,1],[4],[1,4],[1],[]]
*/