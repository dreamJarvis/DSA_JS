/*
	Count Connected Components
*/

function countComponents(n, edges) {
	if(!n)	return 0;

	// contructing un-directional graph
	const graph = new Map();
	for(let node=0; node<n; node++)
		graph.set(node, []);
	for(let [node1, node2] of edges) {
		graph.get(node1).push(node2);
		graph.get(node2).push(node1);
	}

	const visited = new Set();
	const dfs = (currentNode, prevNode) => {
		if(!graph.get(currentNode))		return;
		if(visited.has(currentNode))	return;

		visited.add(currentNode);
		for(let edge of graph.get(currentNode)) {
			if(prevNode === edge)	continue;
			dfs(edge, currentNode);	
		}

		return;
	}

	let count=0;
	for(let node=0; node<n; node++) {
		if(!visited.has(node)) {
			count++;
			dfs(node);
		}
	}

	return count;
}

// Driver function
function main(){
	// const n=3, edges=[[0,1], [0,2]];
	const n=6, edges=[[0,1], [1,2], [2,3], [4,5]];
	console.log(countComponents(n, edges));
};
main();
/*
Input 1:
const n=3, edges=[[0,1], [0,2]]
Output: 1

Input 2:
const n=6
const edges=[[0,1], [1,2], [2,3], [4,5]]
Output: 2
*/ 