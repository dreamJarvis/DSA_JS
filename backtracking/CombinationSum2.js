/*
	40. Combination Sum II
	https://leetcode.com/problems/combination-sum-ii/description/
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	candidates.sort((a, b) => a-b);
	const n = candidates.length;
	const result = [];
	const subset = [];

	function util(index, target) {
		if(target === 0) {
			result.push([...subset]);
			return;
		} else {
			for(let i=index; i<n; i++) {
				if(candidates[i] > target)	continue;
				if(i && (candidates[i] === candidates[i-1]) && i > index)	continue;

				subset.push(candidates[i]);
				util(i+1, target-candidates[i]);
				subset.pop();
			}
		}
	}
	util(0, target);
	return result;
};

// driver
function main() {
	// const candidates = [10,1,2,7,6,1,5], target = 8;
	const candidates = [2,5,2,1,2], target = 5;
	console.log(combinationSum2(candidates, target));
	return;
}
main();