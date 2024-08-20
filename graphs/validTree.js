/**
* @param {number} n
* @param {number[][]} edges
* @returns {boolean}
*/

/*
    Q) condition to be a tree ?
       -> should have a root node
       -> not have a cycle
*/
function validTree(n, edges) {
    if(!n)  return true;    // an empty graph is an empty tree

    // construct an adjacency-list
    const graph = new Map();

    for(let node=0; node<n; node++)
        graph.set(node, []);

    // un-directional graph
    for(let [node1, node2] of edges) {
        graph.get(node1).push(node2);
        graph.get(node2).push(node1);
    }

    const visited = new Set();
    const isCycleDetected = (currNode, prevNode) => {
        if(visited.has(currNode))    return true;   // it is a cycle, if already visited

        // mark current node as visited, then move to it's edges
        visited.add(currNode);

        // check for every edge, if cycle is there
        for(let edge of graph.get(currNode)) {
            /*
                in undirected graph, we won't call the bi-directional link btw parent & child nodes, as cycle.
                we will look for cycle except parent-child relationship
            */ 
            if(edge === prevNode)   continue;
            if(isCycleDetected(edge, currNode))   return true;
        }

        return false;
    }

    return !isCycleDetected(0) && visited.size === n;
}

// driver function
function main() {
     const n=5, edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
     // const n=5, edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]];
     // const n=5, edges=[[0,1],[2,0],[3,0],[1,4]];
     // const n=4, edges=[[0,1],[2,3]];

    console.log(validTree(n, edges)); 
}
main();

/*
Example 1:
Input:
n = 5
edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

Output:
true

Example 2:
Input:
n = 5
edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]

Output:
false
*/ 
