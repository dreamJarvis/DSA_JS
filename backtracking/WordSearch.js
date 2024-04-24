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
    if (!word)	return false;

    function dfs(letterIndex, i, j) {
        if (letterIndex === word.length) return true;

        const letter = word[letterIndex];

        if (
            i < 0 || j < 0 ||
            i >= board.length ||
            j >= board[i].length ||
            board[i][j] !== letter
        ) {
            return false;
        }

        board[i][j] = '*';

        if (
            dfs(letterIndex + 1, i + 1, j) ||
            dfs(letterIndex + 1, i - 1, j) ||
            dfs(letterIndex + 1, i, j + 1) ||
            dfs(letterIndex + 1, i, j - 1)
        ) {
            return true;
        }

        board[i][j] = letter;

        return false;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(0, i, j)) {
                return true;
            }
        }
    }

    return false;
};

// driver
function main() {
	// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
	// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE";
	const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB";
	// const board = [["a", "b"]], word = "ba";

	console.log(exist(board, word));
	return;
}
main();
