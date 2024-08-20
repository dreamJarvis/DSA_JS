/*
	210. Course Schedule II
*/ 
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
/*
	algo: Topological Sort
	TC : O(Edges + vertices)
*/
var findOrder = function(numCourses, prerequisites) {
    const graph = new Map();
    const visited = new Array(numCourses).fill(false);
    const stash = new Array(numCourses).fill(false);
    const trail = [];

    for(let course=0; course<numCourses; course++)  
        graph.set(course, []);
    for(const [course, preReq] of prerequisites)
        graph.get(course).push(preReq);

    const cycleDetected = (course) => {
        if(stash[course]) return true;
        if(visited[course]) return false;

        stash[course] = true;

        for(let preReq of graph.get(course)) {
            if(cycleDetected(preReq))   return true;
        }

        stash[course] = false;
        visited[course] = true;

        trail.push(course);

        return false;
    }

    for(let course=0; course<numCourses; course++) {
        if(cycleDetected(course))   return [];
    }

    return trail;

};

// Driver function
function main() {
	// const numCourses = 1, prerequisites = [];
	const numCourses = 2, prerequisites = [[1,0], [1,0]];
	// const numCourses = 2, prerequisites = [[1,0]];
	// const numCourses = 2, prerequisites = [[0,1]];
	// const numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]];
	console.log(findOrder(numCourses, prerequisites));
}
main();
/*
Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Example 2:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Example 3:
Input: numCourses = 1, prerequisites = []
Output: [0]
*/