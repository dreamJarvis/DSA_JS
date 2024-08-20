/*
	684. Redundant Connection
	https://leetcode.com/problems/redundant-connection/description/
*/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */

/*
	OPTIMISED SOLUTION: UNION & FIND
*/
/*
	apply uinon & find, to find the redundant edge in the graph,
	that makes it a cycle
*/
var findRedundantConnection = function(edges) {
	const n = edges.length;

	const rank = new Array(n+1).fill(1);
	const parent = new Array(n+1).fill(0);

	for(let node=1; node<=n; node++)
		parent[node] = node;

	// finds the root node of the given node (at 0th level)
	const find = (node) => {
		let par = parent[node];
		while(par != parent[par]) {
			parent[par] = parent[parent[par]];	// path compression
			par = parent[par];
		}
		return par;
	}

	/*
		if parent of both nodes are same, 
		then it is redundant to connect them, 
		as they already have a connection through common root
	*/
	const union = (node1, node2) => {
		let parent1 = find(node1);
		let parent2 = find(node2);

		if(parent1 === parent2)	return false;

		if(rank[parent1] > rank[parent2]) {
			parent[parent2] = parent1;
			rank[parent1] += rank[parent2];
		} else {
			parent[parent1] = parent2;
			rank[parent2] += rank[parent1];
		}

		return true;
	}

	for(const [node1, node2] of edges) {
		const edge1 = find(node1);
		const edge2 = find(node2);
		if(!union(edge1, edge2))	return [node1, node2];
	}

	return [];
};

/*
	NAIVE SOLUTION: DFS
*/ 
/**
	Intuition to solve this problem is that we need to build the graph,
	and then check if there is a cycle
 */
var findRedundantConnectionNaive = function(edges) {
    const adjacencyList = {}
    const dfs = (node, target, prev) =>{
        if (node === target) return true 
        for (let subnode of adjacencyList[node]){
            if (subnode !== prev && dfs(subnode, target, node)) return true
        }
        return false
    }

    //  Build graph one edge at a time
    for (let edge of edges){
        const [a,b] = edge
        if (!adjacencyList[a]) adjacencyList[a] = []
        if (!adjacencyList[b]) adjacencyList[b] = []

        adjacencyList[a].push(b)
        adjacencyList[b].push(a)

        //  Traverse the graph and check for a cycle for each new edge
        if (dfs(b,a,a)) return [a,b]
    }
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