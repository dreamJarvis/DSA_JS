/*
	39. Combination Sum
*/ 
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const comb = (candidates, target, res, temp, index) => {
        if (target === 0) {            
            res.push([...temp]);
            return;
        }

        if (target < 0)	return;

        for (let i = index; i < candidates.length; i++) {
            temp.push(candidates[i]);
            comb(candidates, target - candidates[i], res, temp, i);
            temp.pop();
        }
    }
    const res = []
    comb(candidates, target, res, [], 0)
    
    return res
};

// driver function
function main() {
	const candidates = [2,3,6,7], target = 7
	// const nums = [0];
	console.log(combinationSum(candidates, target));
};
main();