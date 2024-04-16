/*
	150. Evaluate Reverse Polish Notation
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const res = [];

    const ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };

    for (const token of tokens) {
        if (ops[token]) {
            const right = res.pop();
            const left = res.pop();
            res.push(ops[token](left, right));;
        } else {
            res.push(parseInt(token));
        }
    }
    return res.pop();
};

// Driver function
function main() {
	const tokens = ["2","1","+","3","*"];
	// const tokens = ["4","13","5","/","+"];
	// const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

	console.log(evalRPN(tokens));
};
main();