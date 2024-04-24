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

var subsetsWithDup2 = function(nums) {
    const n = nums.length;
    const result = [];
    const set = new Set();
    nums.sort((a, b) => a-b);

    function util(subset, index) {
    	if(index === n) {
    		if(!set.has(subset.toString())){
	    		result.push([...subset]);
	    		set.add(subset.toString());
    		}
    		return;
    	}

    	const temp = [...subset, nums[index]];
    	return util(temp, index+1) || util(subset, index+1);
    }
    util([], 0);
    return result;
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