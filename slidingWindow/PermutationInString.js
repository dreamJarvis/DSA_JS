/*
	Permutation in String
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const arrMatches = (arr1, arr2) => {
	for(let i=0; i<27; i++) {
    	if(arr1[i] !== arr2[i])	
    		return false;
    }
    return true;
}

var checkInclusion = function(s1, s2) {
    const n1 = s1.length, n2 = s2.length;
    let s1Freq = new Array(26).fill(0);
    let tempFreq = new Array(26).fill(0);

    for(let i=0; i<n1; i++)	{
    	tempFreq[s2[i]?.charCodeAt(0) - 97]++;
    	s1Freq[s1[i]?.charCodeAt(0) - 97]++;
    }

    let si=0;
    for(let i=0; i<n2-n1; i++) {
    	if(arrMatches(s1Freq, tempFreq))	return true;

    	tempFreq[s2[i]?.charCodeAt(0) - 97]--;
    	tempFreq[s2[n1+i]?.charCodeAt(0) - 97]++;
    }

    return arrMatches(s1Freq, tempFreq);
};

// Driver function
function main() {
	// const s1 = "ab", s2 = "eidbaooo";
	const s1 = "ab", s2 = "eidboaoo";

	console.log(checkInclusion(s1, s2));
}
main();