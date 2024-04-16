/*
	242. Valid Anagram
*/

var isAnagram = function(s, t) {
	if(t.length != s.length)	return false;
 
    let sFreq = {};
    for(let i=0; i < s.length; i++){
    	if(sFreq.hasOwnProperty(s[i])) {
    		sFreq[s[i]]++;
    	}
    	else sFreq[s[i]] = 1;
    }

    for(let i=0; i < t.length; i++){
    	if(!sFreq[t[i]])	return false;
    	if(sFreq.hasOwnProperty(t[i])) sFreq[t[i]]--;
    }

    return true;
};

// Driver function
function main() {
	const s = "anagram", t = "nagaram";
	// const s = "aacc", t = "ccac";
	// const s = "rat", t = "car";
	console.log(isAnagram(s, t));
};

main();