/*
	79. Word Search
	https://leetcode.com/problems/word-search/description/
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
	function util(i, j, letterIndex) {
		if(letterIndex === word.length)	return true;

		const letter = word[letterIndex];

		if(
			i < 0 || j < 0 ||
			i >= board.length || 
			j >= board[i].length ||
			board[i][j] !== letter	
		) {
			return false;
		}

		board[i][j] = '*';

		if(
			util(i+1, j, letterIndex+1) || 
			util(i, j+1, letterIndex+1) || 
			util(i-1, j, letterIndex+1) || 
			util(i, j-1, letterIndex+1)
		) {
			return true;
		}

		board[i][j] = letter;

		return false;
	}


	for(let i=0; i<board.length; i++) {
		for(let j=0; j<board[0].length; j++) {
			if(board[i][j] === word[0]) {
				if(util(i, j, 0))	return true;
			}
		}
	}

	return false;
};

// driver
function main() {
	// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
	// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE";
	// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB";
	const board = [["a", "b"]], word = "ba";

	console.log(exist(board, word));
	return;
}
main();