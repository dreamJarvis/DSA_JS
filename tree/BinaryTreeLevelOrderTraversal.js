/*
	102. Binary Tree Level Order Traversal
	https://leetcode.com/problems/binary-tree-level-order-traversal/description/
*/
// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if(!root)	return [];

	const stack = [root];
	const result = [];
	
	while(stack && stack.length > 0) {
		let k = stack.length;

		const temp = [];
		while(k) {
			const node = stack.shift();
			temp.push(node.val);			
			if(node.left)	stack.push(node.left);
			if(node.right)	stack.push(node.right);
			k--;
		}
		result.push(temp);
	}
	return result;
};

// Driver function
function main() {
	const node = new TreeNode(3);
	node.left = new TreeNode(9);
	node.right = new TreeNode(20);
	node.right.left = new TreeNode(15);
	node.right.right = new TreeNode(7);
		
	const result = levelOrder(node);
	console.log(result);
}
main();
