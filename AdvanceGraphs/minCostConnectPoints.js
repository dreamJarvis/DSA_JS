/*
	1584. Min Cost to Connect All Points
*/
/**
 * @param {number[][]} points
 * @return {number}
 */
const manhanttenDist = ([x1, y1], [x2, y2]) => {
	return Math.abs(Math.abs(x2-x1) + Math.abs(y2-y1));
}

var minCostConnectPoints = function(points) {
	const n = points.length;

	const visited = {};
	const dfs = (curr, prev) => {
		// if(edgeCount <= 0)	return Math.abs(curr-prev);
		if(!visited.hasOwnProperty(curr) || visited[curr])	return 0;

		console.log("curr : ", curr, ", prev : ", prev, ", ",
			visited.hasOwnProperty(curr),", ",visited[curr]);

		visited[curr] = true;

		let dist = Number.MAX_VALUE;
		for(const point of points) {
			if(visited.hasOwnProperty(point) && !visited[point]) {
				const value = dfs(point, curr);
				dist = Math.min(
					dist, 
					manhanttenDist(curr, prev) + value
				);

				console.log("dist : ", manhanttenDist(curr, prev), ", ", value);
			}
		}

		visited[curr] = false;
		return dist;
	}

	let minDist = Number.MAX_VALUE;
	for(const point of points) {
		visited[point] = false;
		minDist = Math.min(minDist, dfs(point, point));
	}

	return minDist;
};

// Driver function
function main(){
    const points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
    // const points = [[3,12],[-2,5],[-4,1]];
    console.log(minCostConnectPoints(points));
};
main();
/*
	
*/ 