/*
	130. Surrounded Regions
*/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	const n = board.length;
	const m = board[0].length;

	const DIR = [[1,0], [0,1], [-1,0], [0,-1]];

	const convertBorderingItems = (row, col) => {
	    if(row < 0 || row >= n || col < 0 || col >= m)	return;
        if(board[row][col] == 'X' || board[row][col] == '-1')	return;

        board[row][col] = -1;
		for(const [dirX, dirY] of DIR) {
			const newX = row+dirX;
			const newY = col+dirY;

            convertBorderingItems(newX, newY);
		}

		return;
	}

	// for bordering rows
	for(let i=0; i<n; i++) {
		if(board[i][0] == 'O')		convertBorderingItems(i, 0);
		if(board[i][m-1] == 'O')	convertBorderingItems(i, m-1);;
	}

	// for bordering cols
	for(let i=0; i<m; i++) {
		if(board[0][i] == 'O')		convertBorderingItems(0, i);
		if(board[n-1][i] == 'O')	convertBorderingItems(n-1, i);
	}

	for(let i=0; i<n; i++) {
		for(let j=0; j<m; j++) {
			if(board[i][j] == '-1')		board[i][j] = 'O';
			else if(board[i][j] == 'O')	board[i][j] = 'X';
		}
	}

	return board;
};

// Driver function
function main() {
	const board = [
		["X","X","X","X"],
		["X","O","O","X"],
		["X","X","O","X"],
		["X","O","X","X"]
	];

	// const board = [
	// 	["X"],
	// ];

	// const board = [
	// 	["O","X","O","O","O","X"],
	// 	["O","O","X","X","X","O"],
	// 	["X","X","X","X","X","O"],
	// 	["O","O","O","O","X","X"],
	// 	["X","X","O","O","X","O"],
	// 	["O","O","X","X","X","X"]
	// ];

	console.log(solve(board));

	return 0;
}
main();
/*
Example 1:
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

example 2:
Input: board = [["X"]]
Output: [["X"]]

board: 
[
	["O","X","O","O","O","X"],
	["O","O","X","X","X","O"],
	["X","X","X","X","X","O"],
	["O","O","O","O","X","X"],
	["X","X","O","O","X","O"],
	["O","O","X","X","X","X"]
]

[
	["O","X","O","O","O","X"],
	["O","O","X","X","X","O"],
	["X","X","X","X","X","O"],
	["O","O","X","X","X","X"],
	["X","X","X","X","X","O"],
	["O","O","X","X","X","X"]
]

ans : 
[
	["O","X","O","O","O","X"],
	["O","O","X","X","X","O"],
	["X","X","X","X","X","O"],
	["O","O","O","O","X","X"],
	["X","X","O","O","X","O"],
	["O","O","X","X","X","X"]
]
*/




















