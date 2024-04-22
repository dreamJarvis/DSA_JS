import {MaxHeap} from './MaxHeap.js';

/*
	621. Task Scheduler
	https://leetcode.com/problems/task-scheduler/description/
*/
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
	let maxHeap = new MaxHeap();
	const freq = new Map();
	tasks.forEach((task) => {
		if(freq.has(task)) {
			freq.set(task, freq.get(task)+1);
		} else {
			freq.set(task, 1);
		}
	})

	freq.forEach(item => maxHeap.add(item));

	let time = 0;
	const queue = [];
	while(maxHeap.size() > 0 || queue.length > 0){
		time++;

		if(maxHeap.size() > 0 && maxHeap.peek() > 0) {
			const cnt = maxHeap.remove()-1;
			if(cnt !== 0) {
				queue.push([cnt, time+n]);
			}
		}
		
		if(queue.length > 0 && queue[0][1] === time) {
			maxHeap.add(queue.shift()[0]);
		}
	}

	return time;
};

// var leastInterval = function(tasks, n) {
//     let freq = Array(26).fill(0);
//     for (const task of tasks) {
//         freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
//     }
//     freq.sort((a, b) => b - a);	// tc : O(1), as n = 26, is constant
//     let chunk = freq[0] - 1;
//     let idle = chunk * n;
//     for (let i = 1; i < 26; i++) {
//         idle -= Math.min(chunk, freq[i]);
//     }
//     return idle < 0 ? tasks.length : tasks.length + idle;
// };

// driver function
function main() {
	// const tasks = ["A","A","A","B","B","B"], n = 2;
	// const tasks = ["A","C","A","B","D","B"], n = 1;
	const tasks = ["A","A","A", "B","B","B"], n = 3;
	// const tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n=1;

	console.log(leastInterval(tasks, n));	
}
main();