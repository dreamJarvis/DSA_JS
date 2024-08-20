/*
	207. Course Schedule
	https://leetcode.com/problems/course-schedule/
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Map();
    const visited = new Array(numCourses).fill(false);
    const stash = new Array(numCourses).fill(false);

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

        return false;
    }

    for(let course=0; course<numCourses; course++) {
        if(cycleDetected(course))   return false;
    }

    return true;
};

// Driver function
function main() {
	// const numCourses = 2, prerequisites = [[1,0]];
	// const numCourses = 2, prerequisites = [[1,0],[0,1]];
	const numCourses = 5, prerequisites = [[1,4],[2,4],[3,1],[3,2]];
	// const numCourses = 3, prerequisites = [[1,0],[1,2],[0,1]];
	// const numCourses = 3, prerequisites = [[1,0],[2,0],[0,2]];
	// const numCourses = 20, prerequisites = [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]];
	// const numCourses = 8, prerequisites = [[1,0],[2,6],[1,7],[6,4],[7,0],[0,5]];

	console.log(canFinish(numCourses, prerequisites));
}
main();
/*
Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, 
and to take course 0 you should also have finished course 1. So it is impossible.

Example 3:
numCourse: 5, [[1,4],[2,4],[3,1],[3,2]]
*/





