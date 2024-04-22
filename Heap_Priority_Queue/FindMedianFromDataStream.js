import {Heap} from './Heap.js';

/** 
 *  Min Comparator
 */
Heap.minComparator = (a, b) => { return a - b; }

/** 
 *  Max Comparator
 */
Heap.maxComparator = (a, b) => { return b - a; }


/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.maxHeap = new Heap(Heap.maxComparator);	// max-heap
    this.minHeap = new Heap(Heap.minComparator);	// min-heap
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
        this.maxHeap.add(num);
    } else {
        this.minHeap.add(num);
    }
    
    if(this.maxHeap.size - this.minHeap.size > 1) {
        this.minHeap.add(this.maxHeap.poll());
    } else if(this.minHeap.size - this.maxHeap.size > 1) {
        this.maxHeap.add(this.minHeap.poll());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.size > this.minHeap.size) {
        return this.maxHeap.peek();
    } else if(this.maxHeap.size < this.minHeap.size) {
        return this.minHeap.peek();
    } else {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
};


function main() {
	const medianFinder = new MedianFinder();
	medianFinder.addNum(1);
	medianFinder.addNum(2);
	console.log(medianFinder.findMedian());
	medianFinder.addNum(3);
	console.log(medianFinder.findMedian());
}
main();