/*
	994. Rotting Oranges
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rottenOrangesQueue = [];
    let steps = 0;
    let freshOranges = 0;
    let rows = grid.length;
    let columns = grid[0].length;

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    // return true if the current item is fresh-orange
    function isValid(i, j) {
        if (
            i < 0 || j < 0 || i == rows || j == columns || 
            grid[i][j] != 1
        ) {
            return false;
        }
        return true
    };

	/*
        stashing the rotten oranges -> for BFS,
        and counting the fresh oranges, for checking it all the oranges can rot or not ?
    */
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] == 1) 	freshOranges += 1;
            if (grid[i][j] == 2)	rottenOrangesQueue.push([i, j]);
        }
    }

    // bfs starts from rotten oranges, and spreads to the fresh ones
    while (rottenOrangesQueue.length && freshOranges > 0) {
        const size = rottenOrangesQueue.length

        for (let i = 0; i < size; i++) {
            const [x, y] = rottenOrangesQueue.shift()

            for (let [dirX, dirY] of directions ){
                const newX = dirX + x
                const newY = dirY + y

                // only push the current orange in stash, if it is fresh
                if (isValid(newX, newY)) {
                    grid[newX][newY] = 2
                    rottenOrangesQueue.push([newX, newY])
                    freshOranges -= 1
                }
            }
        }
        
        /* 
            because every rotten orange in this stack, is spreading equally at the same time,
            .'. we increment at every batch of new rotten oranges created by the prev batch
        */
        steps += 1
    }

    return freshOranges == 0? steps: -1;
};

// Driver function
function main(){
	const grid = [[2,1,1],[1,1,0],[0,1,1]];
	// const grid = [[0, 2]];
	// const grid = [[2,1,1],[0,1,1],[1,0,1]];
	// const grid = [[0]];
	console.log(orangesRotting(grid));
}
main();

/*
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, 
because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
*/