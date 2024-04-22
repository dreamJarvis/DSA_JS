import {MinHeap} from './Heap.js';

/*
	973. K Closest Points to Origin
	https://leetcode.com/problems/k-closest-points-to-origin/description/
*/

const distFromOrigin = (point) => {
	return Math.sqrt(Math.abs(point[0]*point[0] + point[1]*point[1]));
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
	const result = [];
	const sortedByOriginDist = points.sort((a, b) => {
		const aDist = distFromOrigin(a);
		const bDist = distFromOrigin(b);
		if(aDist >= bDist)	return 1;
		return -1;
	});

	while(k--) {
		result.push(sortedByOriginDist.shift());
	}

	return result;
};

// driver function
function main() {
	const points = [[1,3],[-2,2]], k = 1;
	// const points = [[3,3],[5,-1],[-2,4]], k = 2;
	// const points = [[-5,4],[-6,-5],[4,6]], k = 2;

	console.log(kClosest(points, k));
}
main();