/** 
 *  custom Heap class
 */
export class Heap {
	constructor(comparator) {
		this.size = 0;
		this.values = [];
		this.comparator = comparator || Heap.minComparator;
	}

	add(val) {
		this.values.push(val);
		this.size++;
		this.bubbleUp();
	}

	peek() {
		return this.values[0] || null;
	}

	poll() {
		const max = this.values[0];
		const end = this.values.pop();
		this.size--;
		if (this.values.length) {
			this.values[0] = end;
			this.bubbleDown();
		}
		return max;
	}

	// adding item: item added bubble up from bottom
	bubbleUp() {
		let index = this.values.length - 1;
		let parent = Math.floor((index - 1) / 2);

		while (this.comparator(this.values[index], this.values[parent]) < 0) {
			[this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
			index = parent;
			parent = Math.floor((index - 1) / 2);	// moving up the heap, swapping item acc to the comparator
		}
	}

	// removing item: item removed, streamed down from top to bottom
	bubbleDown() {
		let index = 0, length = this.values.length;

		while (true) {
			let left = null,
				right = null,
				swap = null,
				leftIndex = index * 2 + 1,
				rightIndex = index * 2 + 2;
			const parent = this.values[index];

			if (leftIndex < length) {
				left = this.values[leftIndex];
				if (this.comparator(left, parent) < 0) swap = leftIndex;
			}

			if (rightIndex < length) {
				right = this.values[rightIndex];
				if (
					(swap !== null && this.comparator(right, left) < 0) || 
					(swap === null && this.comparator(right, parent))
				) {
					swap = rightIndex;
				}
			}
			if (swap === null) break;

			[parent, this.values[swap]] = [this.values[swap], parent];
			index = swap;
		}
	}
}
