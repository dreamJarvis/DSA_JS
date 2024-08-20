/*
	417. Pacific Atlantic Water Flow
*/
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic1 = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const result = [];

    const DIR = [[1,0],[0,1],[-1,0],[0,-1]];

    const atlanticOcean = [];
    const pacificOcean = [];

   	const util = (row, col, prev, visited, result) => {
   		if(row >= n || row < 0)	return;
   		if(col >= m || col < 0)	return;
   		if(visited.has(row+','+col))	return;
   		if(grid[row][col] < prev)	return;

   		visited.add(row+','+col);
   		result.push(row+','+col);

   		for(const [dirX, dirY] of DIR) {
   			util(row+dirX, col+dirY, grid[row][col], visited, result);
   		}

   		return;
   	}

   	const visitedAtlantic = new Set();
   	const visitedPacific = new Set();

   	for(let col=0; col<m; col++){
   		// pacific cols
   		util(0, col, grid[0][col], visitedPacific, pacificOcean);
   		// atlantic cols
   		util(n-1, col, grid[n-1][col], visitedAtlantic, atlanticOcean);
   	}

   	for(let row=0; row<n; row++) {
   		// pacific rows
   		util(row, 0, grid[row][0], visitedPacific, pacificOcean);
   		// atlantic rows
   		util(row, m-1, grid[row][m-1], visitedAtlantic, atlanticOcean);
   	}

   	for(let index of atlanticOcean) {
   		if(pacificOcean.includes(index)) {
   			result.push(index.split(',').map(num => Number(num)));
   		}
   	}

    return result;
};

var pacificAtlantic2 = function(heights) {
    const nRows = heights.length;
    const nCols = heights[0].length;

    // all the legal dir^n water can move
    const DIR = [[1,0],[0,1],[-1,0],[0,-1]];
    
    // creating 2 2D Matrix, one for the atlantic & other for pacific
    const flowsToPacific = new Array(nRows);
    const flowsToAtlantic = new Array(nRows);

    for (let i = 0; i < nRows; i++) {
        flowsToPacific[i] = new Array(nCols).fill(false);
        flowsToAtlantic[i] = new Array(nCols).fill(false);
    }
    
    // dfs on pacific & atlantic cols
    for (let j = 0; j < nCols; j++) {
        // pacific
        if (!flowsToPacific[0][j]) {
            dfs(0, j, flowsToPacific);
        }
        // atlantic
        if (!flowsToAtlantic[nRows-1][j]) {
            dfs(nRows-1, j, flowsToAtlantic);
        }
    }
    
    // dfs on pacific and atlantic rows
    for (let i = 0; i < nRows; i++) {
        // atlantic
        if (!flowsToPacific[i][0]) {
            dfs(i, 0, flowsToPacific);
        }
        // pacific
        if (!flowsToAtlantic[i][nCols-1]) {
            dfs(i, nCols-1, flowsToAtlantic);
        }
    }
    
    function dfs(i, j, marked) {
        marked[i][j] = true;
        for (const [dirX, dirY] of DIR) {
            const x = i+dirX, y = j+dirY;

            if (x < 0 || y < 0 || x >= nRows || y >= nCols) continue;
            if (!marked[x][y] && heights[x][y] >= heights[i][j]) {
                dfs(x, y, marked);
            }
        }
    }

    const result = [];
    for (let i = 0; i < nRows; i++) {
        for (let j = 0; j < nCols; j++) {
            if (flowsToPacific[i][j] && flowsToAtlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
};

// driver function
function main() {
	const heights = [
		[1,2,2,3,5],
		[3,2,3,4,4],
		[2,4,5,3,1],
		[6,7,1,4,5],
		[5,1,1,2,4]
	];

	// const heights = [[1]];

	console.log(pacificAtlantic1(heights));
	return;
}
main();
/*
Input: heights = [
	[1,2,2,3,5],
	[3,2,3,4,4],
	[2,4,5,3,1],
	[6,7,1,4,5],
	[5,1,1,2,4]
];
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Input: heights = [[1]]
Output: [[0,0]]
*/