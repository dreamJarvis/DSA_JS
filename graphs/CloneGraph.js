/*
	133. Clone Graph
*/

// Definition for a _Node.
function _Node(val, neighbors) {
	this.val = val === undefined ? 0 : val;
	this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
	if(!node)	return;
	
	const util = (node, map) => {
		if(map.has(node.val))	return map.get(node.val);

		const newNode = new _Node(node.val);
		map.set(newNode.val, newNode);	

		newNode.neighbors = node.neighbors.map((value) => {
			return util(value, map);
		});

		return newNode;
	}

	const map = new Map();
	return util(node, map);
};

//=========================== helper functions =============================//
function traverseGraph(node) {
	const util = (node, map) => {
		if(!node || node.neighbors === undefined)	return;
		if(node && map.includes(node.val))	return;

		console.log(node.val);
		map.push(node.val);

		node.neighbors.forEach((value) => {
			util(value, map);
		});

		return;
	}

	util(node, []);
}

function constructGraphFromAdjList(list) {
	const n = list.length;
	const listMap = new Map();

	for(let i=1; i<=n; i++)
		listMap.set(i, new _Node(i));

	list.forEach((values, index) => {
		if(listMap.has(index+1)) {
			const currentNode = listMap.get(index+1);
			
			const neighbors = values.map((value) => {
				if(listMap.has(value))	{
					const node = listMap.get(value);
					if(!node.neighbors.includes(currentNode))
						node.neighbors.push(currentNode);
					return listMap.get(value);
				}
			})

			currentNode.neighbors = neighbors;
		}

	});

	return listMap.get(1);
}

// driver function
function main() {
	const adjList = [[2,4],[1,3],[2,4],[1,3]];
	const node = constructGraphFromAdjList(adjList);

	traverseGraph(cloneGraph(node));

	return;
}
main();


























