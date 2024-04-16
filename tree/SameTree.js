/*
	100. Same Tree
	https://leetcode.com/problems/same-tree/description/
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
// 	let result = true;
// 	function checkIfSame(a, b) {
// 		if(!a && !b){	
// 			result = result & true;
// 			return true;
// 		}
// 		if(!a && b || !b && a){	
// 			result = result & false;
// 			return false;
// 		}
// 		if(a.val !== b.val){ 
// 			result = result & false;
// 			return false;
// 		}

// 		let left = true;
// 		let right = true;
// 		if(result) {
// 			left = checkIfSame(a.left, b.left);
// 			right = checkIfSame(a.right, b.right);
// 		}

// 		return left && right;
// 	}
// 	checkIfSame(p, q);
// 	return result === 1;
// };

const isSameTree = (a, b) => {
	if(!a && !b)	return true;
	if(!a && b || !b && a)	return false;
	if(a.val !== b.val) return false;

	const left = isSameTree(a.left, b.left);
	const right = isSameTree(a.right, b.right);

	return left && right;
}

// Driver function
function main() {
	const node1 = new TreeNode(1);
	node1.left = new TreeNode(2);
	node1.right = new TreeNode(3);

	const node2 = new TreeNode(1);
	node2.left = new TreeNode(7);
	node2.right = new TreeNode(3);

	// const node1 = new TreeNode(1);
	// node1.left = new TreeNode(2);

	// const node2 = new TreeNode(1);
	// node2.right = new TreeNode(2);
	// node2.left = new TreeNode(2);

	console.log(isSameTree(node1, node2));
}
main();