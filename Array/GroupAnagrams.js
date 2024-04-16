/*
	49. Group Anagrams
*/

var groupAnagrams = function(strs) {
	const freq = [];
	for(const item of strs) {
		const arrItem = item.split("").sort().join();
		if(freq[arrItem]) {
			freq[arrItem].push(item);
		} else {
			freq[arrItem] = [item];
		}
	}

	const result = [];
	for(let key in freq) {
		result.push(freq[key]);
	}

	return result;
};

// Driver function
function main() {
	const strs = ["eat","tea","tan","ate","nat","bat"];

	console.log(groupAnagrams(strs));
};

main();