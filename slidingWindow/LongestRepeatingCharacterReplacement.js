/*
	424. Longest Repeating Character Replacement
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
	const n = s.length;
	let maxLength = 0;
	let maxFreq = 0;
	let freq = [];

	let si=0, ei=0;
	while(ei < n) {
		if(freq.hasOwnProperty(s[ei]))	freq[s[ei]]++;
		else	freq[s[ei]]=1;

		maxFreq = Math.max(maxFreq, freq[s[ei]]);
		ei++;

		if((ei - si) - maxFreq > k) {
			freq[s[si]]--;
			si++;
		}

		maxLength = Math.max(maxLength, (ei - si));
	}

	return maxLength;
};

// driver function
function main() {
	const s = "ABAB", k = 2;
	// const s = "AAAA", k = 2;
	// const s = "ABBB", k = 2;
	// const s = "AABABBA", k = 1;

	console.log(characterReplacement(s, k));
};
main();