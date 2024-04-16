/*
	22. Generate Parentheses
*/
/**
 * @param {number} n
 * @return {string[]}
 */
const util =  (n, op, cp, ans, results) => {
	if(ans.length === 2*n){
		results.push(ans);
		return;
	}

	if(cp > op)	util(n, op, cp-1, ans+")", results);
	if(op > 0)	util(n, op-1, cp, ans+"(", results);

	return;
}

var generateParenthesis = function(n) {
	let results = [];
	let ans = "";
	util(n, n, n, ans, results);
	return results;
};

// Driver function
function main() {
	const n = 3;
	// const n = 1;

	console.log(generateParenthesis(n));
};
main();