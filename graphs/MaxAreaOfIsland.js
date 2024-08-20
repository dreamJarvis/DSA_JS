/*
	Max Area of Island
	https://leetcode.com/problems/max-area-of-island/description/
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if(!grid || grid.length === 0)	return 0;

    let n = grid.length;
    let m = grid[0].length;

    const DIR = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	]

    const util = (row, col) => {
    	if(row >= n || row < 0) return 0;
    	if(col >= m || col < 0)	return 0;
		if(!grid[row][col])	return 0;	

    	grid[row][col] = 0;
	
    	let area = 0;    	
    	for(const [dir, dic] of DIR) {
	    		area += util(row+dir, col+dic);
    	}

    	return area+1;
    }

    let maxArea = 0;
    for(let row=0; row<n; row++) {
    	for(let col=0; col<m; col++) {
    		if(grid[row][col]) {
    			maxArea = Math.max(maxArea, util(row, col));
    		}
    	}
    }

    return maxArea;
};

// Driver function
function main() {
	const grid = [	
		[0,0,1,0,0,0,0,1,0,0,0,0,0], 
		[0,0,0,0,0,0,0,1,1,1,0,0,0],
		[0,1,1,0,1,0,0,0,0,0,0,0,0], 
		[0,1,0,0,1,1,0,0,1,0,1,0,0],
		[0,1,0,0,1,1,0,0,1,1,1,0,0], 
		[0,0,0,0,0,0,0,0,0,0,1,0,0], 
		[0,0,0,0,0,0,0,1,1,1,0,0,0], 
		[0,0,0,0,0,0,0,1,1,0,0,0,0]
	];
	// const grid = [	
	// 	[0,0,0,0,0,0,0,0,0,0,0,0,0]
	// ];
	console.log(maxAreaOfIsland(grid));
};
main();

/*
Input: grid = [	[0,0,1,0,0,0,0,1,0,0,0,0,0], [0,0,0,0,0,0,0,1,1,1,0,0,0],
	[0,1,1,0,1,0,0,0,0,0,0,0,0], [0,1,0,0,1,1,0,0,1,0,1,0,0],
	[0,1,0,0,1,1,0,0,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,0,1,0,0], 
	[0,0,0,0,0,0,0,1,1,1,0,0,0], [0,0,0,0,0,0,0,1,1,0,0,0,0]
];
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
*/