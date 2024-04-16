/*
	36. Valid Sudoku	
*/
var isValidSudoku = function(board) {
	for(let i = 0; i < 9; i++) {
		let row = new Set(),
		    col = new Set(),
		    subGrid = new Set();

		for(let j=0; j<9; j++) {
			const rowCell = board[i][j];	
			const colCell = board[j][i];
			const gridCell = board[3*Math.floor(i/3) + Math.floor(j/3)][3*(i%3)+(j%3)];

			if(rowCell !== '.') {
				if(row.has(rowCell))	return false;
				row.add(rowCell);
			}
			
			if(colCell !== '.') {
				if(col.has(colCell))	return false;
				col.add(colCell);
			}

			if(gridCell !== '.') {
				if(subGrid.has(gridCell))	return false;
				subGrid.add(gridCell);
			}
		}
	}

	return true;
};

// Driver function
function main() {
	const  board = 
		[["5","3",".",".","7",".",".",".","."]
		,["6",".",".","1","9","5",".",".","."]
		,[".","9","8",".",".",".",".","6","."]
		,["8",".",".",".","6",".",".",".","3"]
		,["4",".",".","8",".","3",".",".","1"]
		,["7",".",".",".","2",".",".",".","6"]
		,[".","6",".",".",".",".","2","8","."]
		,[".",".",".","4","1","9",".",".","5"]
		,[".",".",".",".","8",".",".","7","9"]];

	// const board = 
	// 	[["8","3",".",".","7",".",".",".","."]
	// 	,["6",".",".","1","9","5",".",".","."]
	// 	,[".","9","8",".",".",".",".","6","."]
	// 	,["8",".",".",".","6",".",".",".","3"]
	// 	,["4",".",".","8",".","3",".",".","1"]
	// 	,["7",".",".",".","2",".",".",".","6"]
	// 	,[".","6",".",".",".",".","2","8","."]
	// 	,[".",".",".","4","1","9",".",".","5"]
	// 	,[".",".",".",".","8",".",".","7","9"]];

	console.log(isValidSudoku(board));
};
main();