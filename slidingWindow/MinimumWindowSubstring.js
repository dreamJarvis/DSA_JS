/*
	76. Minimum Window Substring
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
	const n1 = s.length;
	const n2 = t.length;

	if(n1 < n2)	return "";

	const sFreq = new Array(256).fill(0);  
	const tFreq = new Array(256).fill(0);  

	for(let i=0; i<n2; i++)
		tFreq[t[i]?.charCodeAt(0)]++;

	let minLen = n1+1;
	let minString = "";
	let si = 0;
	let counter = 0;
	
	for(let ei=0; ei < n1; ei++) {
		const currEndIdx = s[ei]?.charCodeAt(0);
		if(tFreq[currEndIdx]) {
			sFreq[currEndIdx]++;
			if(tFreq[currEndIdx] >= sFreq[currEndIdx])
				counter++;
		}

		while(counter >= n2) {
			const startIdx = s[si]?.charCodeAt(0);
			if(tFreq[startIdx]) {
				sFreq[startIdx]--;
				if(sFreq[startIdx] < tFreq[startIdx])	counter--;
			}

			if(ei-si+1 < minLen) {
				minLen = ei-si+1;
				minString = s.substring(si, ei+1);
			}
			si++;
		}
	}

	return minString;
};


// Driver function
function main() {
	const s = "ADOBECODEBANC", t = "ABC";
	// const s = "a", t = "a";
	// const s = "a", t = "b";
	// const s = "a", t = "aa";
	// const s = "abc", t = "de";	

	console.log(minWindow(s, t));
};
main();