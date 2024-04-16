/*
	3. Longest Substring Without Repeating Characters
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let maxLength = 0;
	let start = 0;
	let charMap = new Map();

	for(let i=0; i<s.length; i++) {
		const char = s[i];

		if(charMap.has(char) && start <= charMap.get(char)) {
			start = charMap.get(char)+1;
		} else {
			maxLength = Math.max(maxLength, i-start+1);
		}

		charMap.set(char, i);
	}

	return maxLength;
};

// driver function
function main() {
	// const s = "abcabcbb";
	// const s = "bbbbb";
	const s = "pwwkew";

	console.log(lengthOfLongestSubstring(s));
};
main();