/*
	684. Redundant Connection
	https://leetcode.com/problems/redundant-connection/description/
*/
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
	const n = edges.length;

	const rank = new Array(n+1).fill(1);
	const parent = new Array(n+1).fill(0);

	for(let node=1; node<=n; node++)
		parent[node] = node;

	const find = (node) => {
		let par = parent[node];

		while(par != parent[par]) {
			parent[par] = parent[parent[par]];	// path compression
			par = parent[par];
		}
		return par;
	}

	const union = (node1, node2) => {
		let parent1 = find(node1);
		let parent2 = find(node2);

		if(parent1 === parent2)	return false;

		if(rank[parent1] > rank[parent2]) {
			parent[parent2] = parent1;
			rank[parent1] += rank[parent2];
		}
		else {
			parent[parent1] = parent2;
			rank[parent2] += rank[parent1];
		}

		return true;
	}

	for(const [node1, node2] of edges) {
		if(!union(node1, node2))	return [node1, node2];
	}

	return [];
};

// Driver function
function main() {
	// const edges = [[1,2],[1,3],[2,3]];
	const edges = [[1,2],[2,3],[3,4],[1,4],[1,5]];
	console.log(findRedundantConnection(edges));
	return;
};
main();
/*
Ex: 1
Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

Ex: 2
Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
Output: [1,4]
*/