/*
	200. Number of Islands
	https://leetcode.com/problems/number-of-islands/description/
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	if(!grid || grid.length === 0)	return 0;
	const n = grid.length;
	const m = grid[0].length;
	let numOfIslands = 0;

	const DIR = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	]

	const connectLands = (grid, row, col) => {
		if(row >= n || row < 0)	return 0;
		if(col >= m || col < 0)	return 0;
		if(grid[row][col] === '0')	return 0;

		grid[row][col] = '0';

		for(const [dir, dic] of DIR)
			connectLands(grid, row+dir, col+dic);
	}

	for(let row=0; row < n; row++) {
		for(let col=0; col < m; col++) {
			if(grid[row][col] === '1') {
				connectLands(grid, row, col);
				numOfIslands++;
			}
		}
	}

	return numOfIslands;
};

// driver function
function main() {
	const grid = [
	  ["1","1","1","1","0"],
	  ["1","1","0","1","0"],
	  ["1","1","0","0","0"],
	  ["0","0","0","0","0"]
	];

	// const grid = [
	//   ["1","1","0","0","0"],
	//   ["1","1","0","0","0"],
	//   ["0","0","1","0","0"],
	//   ["0","0","0","1","1"]
	// ];

	// const grid = [
	// 	["1","1","1"],
	// 	["0","1","0"],
	// 	["1","1","1"]
	// ];

	console.log(numIslands(grid));
}
main();
/*
Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/