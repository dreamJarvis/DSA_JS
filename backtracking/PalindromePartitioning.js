/*
	131. Palindrome Partitioning
	https://leetcode.com/problems/palindrome-partitioning/
*/
/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = (str) => {
	let s=0, e=str.length-1;
	while(s < e) {
		if(str[s] !== str[e])	return false;
		s++;e--;
	}
	return true;
}

var partition = function(s) {
	const n = s.length;
	const result = [];
	const temp = [];

	function util(str) {
		if(str.length === 0) {
			result.push([...temp]);
			return;
		}

		for(let i=0; i< str.length; i++) {
			const prefix = str.slice(0, i+1);
			const restOfString = str.slice(i+1);

			if(isPalindrome(prefix)) {
				temp.push(prefix);
				util(restOfString);
				temp.pop();
			}
		}

		return;
	}
	util(s);
	
	return result;
};

// driver function
function main() {
	// const s = "aab";
	const s = "a";
	// const s = "bb";

	console.log(partition(s));

	return 0;
}
main();