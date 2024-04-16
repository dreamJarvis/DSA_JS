/*
	Search a 2D Matrix
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
	const n = matrix.length-1, m = matrix[0].length-1;

	// search row-wise
	let row = 0, col = m;
	while(row < n && col > -1) {
		const curr = matrix[row][col];
		if(curr === target)	return true;
		else if(target > curr)	row++;
		else col--;
	}

	return false;
};

// driver function
function main() {
	// const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
	// const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13;
	// const matrix = [[1]], target = 1;
	// const matrix = [[1]], target = 2;
	// const matrix = [[1], [3]], target = 2;
	const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 10;

	console.log(searchMatrix(matrix, target));
}
main();