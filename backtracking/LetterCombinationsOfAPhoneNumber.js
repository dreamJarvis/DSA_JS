/*
	Letter Combinations of a Phone Number
	https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
const letters = {
	2: ["a", "b", "c"],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z']
}

var letterCombinations = function(digits) {
	const result = [];

	const util = (num, digits, index) => {
		if(index === digits.length) {
			if(num.length)	result.push(num);
			return;
		}

		letters[digits[index]].forEach((ch) => {
			const str = num+ch;
			util(str, digits, index+1);
		});

		return;
	}
	util("", digits, 0);

	return result;
};

// driver function
function main() {
	// const digits = "23";	
	// const digits = "";	
	const digits = "2";	

	console.log(letterCombinations(digits));

	return 0;
}
main();