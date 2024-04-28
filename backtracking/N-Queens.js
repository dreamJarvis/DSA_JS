/*
	N-Queens
	https://leetcode.com/problems/n-queens/description/
*/
/**
 * @param {number} n
 * @return {string[][]}
 */

const isValid = (board, row, col) => {
	// check col in this row
	for(let i=row; i>=0; i--) {
		if(board[i][col] === 'Q')	return false;
	}

	// check left diagonal
	for(let i=row,j=col; i>=0 && j>=0; i--,j--) {
		if(board[i][j] === 'Q')		return false;
	}

	// check right diagonal
	for(let i=row,j=col; i>=0&&j<board.length; i--,j++) {
		if(board[i][j] === 'Q')		return false;
	}

	return true;
}

var solveNQueens = function(n) {
	if(!n)	return [[]];

	let board = [];
	for(let i=0; i<n; i++) {
		board[i] = new Array(n).fill(".");
	}

	const result = [];	
	const util = (board, row) => {
		if(row === board.length) {
			result.push([]);
			for(let i=0; i<board.length; i++) {
				result[result.length-1].push(board[i].join(''));
			}
			
			return;
		}

		for(let col=0; col<board.length; col++) {
			if(isValid(board, row, col)) {
				board[row][col] = "Q";
				util(board, row+1);
				board[row][col] = '.';
			}
		}
	}
	util(board, 0);

	return result;
};

// driver function
function main() {
	const n = 4; 

	
	console.log(solveNQueens(n));

	return 0;
}
main(); 