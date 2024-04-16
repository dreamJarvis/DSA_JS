/*
	155. Min Stack
*/

var MinStack = function () {
    this.stack = []
    this.mins = []
};

/** 
 * @param {number} val
 * @return {void}
 */
function last(arr) {
    return arr[arr.length - 1]
}
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    if (this.mins.length) {
        this.mins.push(Math.min(last(this.mins), val))
    } else {
        this.mins.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.mins.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return last(this.mins)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// driver function
function main() {
	let MinStackfn = new MinStack();

	MinStackfn.push(-2);
	MinStackfn.push(0);
	MinStackfn.push(-3);
	console.log(MinStackfn.getMin()); 
	MinStackfn.pop();
	console.log(MinStackfn.top());
	console.log(MinStackfn.getMin()); 

};
main();