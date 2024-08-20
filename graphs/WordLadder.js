/*
	Word Ladder
	https://leetcode.com/problems/word-ladder/description/
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
	if(!wordList.includes(endWord))	return 0;

	if(!wordList.includes(beginWord)) wordList.unshift(beginWord);
	const neighbors = {};

	for(const word of wordList) {
		for(let j=0; j<word.length; j++) {
			const pattern = word.slice(0,j) + "*" + word.slice(j+1);
			if(!neighbors[pattern]) neighbors[pattern]=[];
			neighbors[pattern].push(word);
		}
	}

	const visited = new Set([beginWord]);
	const q = [beginWord];
	let len = 1;

	while(q.length) {
		const k = q.length;
		for(let i=0; i<k; i++) {
			const word = q.shift();

			if(word === endWord)	return len;

			for(let j=0; j<word.length; j++) {
				const pattern = word.slice(0,j) + "*" + word.slice(j+1);
				for(const edge of neighbors[pattern]) {
					if(!visited.has(edge)) {
						visited.add(edge);
						q.push(edge);
					}
				}
			}
		}

		len++;
	}

	return 0;
};

// Driver function
function main(){
	// const beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"];
	// const beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"];
	// const beginWord = "hot", endWord = "dog", wordList = ["hot","dog"];
	const beginWord = "hot", endWord = "dog", wordList = ["hot","dog", "dot"];
	console.log(ladderLength(beginWord, endWord, wordList));
};
main();
/*
Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
*/