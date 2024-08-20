/*
	Islands and Treasure
	https://neetcode.io/problems/islands-and-treasure
*/
const DIR = [
	[1, 0],
	[0, 1],
	[-1, 0],
	[0, -1],
];

/*
	here, it makes more sense to apply BFS, 
	as we have to find the shortest distance available from '0' as a starting point,
	to all the INF neighbours i.e. moving in a radial pattern,
	i.e. moving breath-wise, hence BFS
*/
function islandsAndTreasure(grid) {
    let ROWS = grid.length;
    let COLS = grid[0].length;
    let visit = new Set();
    let q = [];

    // add the cell to the stash/queue, and mark as visited
    function addCell(r, c) {
        if (
            Math.min(r, c) < 0 ||
            r === ROWS ||
            c === COLS ||
            visit.has(r + ',' + c) ||
            grid[r][c] === -1
        ) {
            return;
        }
        visit.add(r + ',' + c);
        q.push([r, c]);
    }

    // adding all the base condition i.e. starting from value = 0
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 0) {
                q.push([r, c]);
                visit.add(r + ',' + c);
            }
        }
    }

    // bfs (greadth-first-search)
    /*
		we first start traversing radially through all the 0's,
		and which-ever 0 get to the indexes first, won't let the other 0's
		access it, by marking it visited, i.e. the 0's that visited the index,
		was able to get their by shortest path, then the other one trying to access it

		BFS -> already inculcates the shortest-path-first by growing radially
    */
	let dist = 0;
    while (q.length > 0) {
    	// iterating by vicinity of neighbours
    	const k = q.length;
        for (let i = 0, len = k; i < len; i++) {
            let [r, c] = q.shift();
            grid[r][c] = dist;

            for(const [x,y] of DIR) {
	            addCell(r + x, c + y);
            }
        }
        // add 1 / circumference increased
        dist += 1;
    }

    return grid;
}
    
/*
    here, we are using the grid itself as a visited map,
    if the grid doesn't have value of INF or 0, i.e. it is already visited,
    then we do not visit it
*/ 
function islandsAndTreasure2(grid) {
    const INF = 2147483647;
    const DIR = [[1,0], [0,1], [-1,0], [0,-1]];

    const n = grid.length;
    const m = grid[0].length;

    let tresureQueue = [];
    for(let row=0; row<n; row++) {
        for(let col=0; col<m; col++) {
            if(!grid[row][col]) {
                tresureQueue.push([row, col]);
            }
        }
    }

    const isValid = (row, col) => {
        if(
            (row>=0 && row<n && col>=0 && col<m) && 
            grid[row][col] === INF && 
            grid[row][col] !== -1
        )   return true;
        return false;
    }

    let dist = 0;
    while(tresureQueue.length) {
        let len = tresureQueue.length;
        while(len--) {
            const [row, col] = tresureQueue.shift();
            if(grid[row][col] === INF || !grid[row][col]) {
                grid[row][col] = dist;
                for(const [dirX, dirY] of DIR) {
                    const [newX, newY] = [row+dirX, col+dirY];
                    if(isValid(newX, newY)) {                    
                        if(grid[newX][newY] === INF) {
                            tresureQueue.push([newX, newY]); 
                        }
                    }
                }
            }
        }
        dist++;
    }

    return grid;
};

// driver function
function main() {
	const grid = [
		[2147483647,2147483647,2147483647],
		[2147483647,-1,2147483647],
		[0,2147483647,2147483647]
	]
	// const grid = [
	//   [2147483647,-1,0,2147483647],
	//   [2147483647,2147483647,2147483647,-1],
	//   [2147483647,-1,2147483647,-1],
	//   [0,-1,2147483647,2147483647]
	// ]
	// const grid = [
	//   [0,-1],
	//   [2147483647,2147483647]
	// ];

    // console.log(islandsAndTreasure(grid));
	console.log(islandsAndTreasure2(grid));
	return;
}
main();
/*
Input: [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]

Output: [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]

Input: [
  [0,-1],
  [2147483647,2147483647]
]

Output: [
  [0,-1],
  [1,2]
]

input: [
	[2147483647,2147483647,2147483647],
	[2147483647,-1,2147483647],
	[0,2147483647,2147483647]
]

Output: [
	[2,3,4],
	[1,-1,3],
	[0,1,2]
]
*/