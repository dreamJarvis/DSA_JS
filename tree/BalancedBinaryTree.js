/*
	110. Balanced Binary Tree
	https://leetcode.com/problems/balanced-binary-tree/description/	
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
	let result = true;
	function traverse(node) {
		if(!node) return 0;

		let left = null, right = null;
		if(result) {
			left = traverse(node.left);
			right = traverse(node.right);	
		}
		
		if(Math.abs(left - right) > 1)	{
			result = false;
		} 

		return Math.max(left, right) + 1;
	}
	traverse(root);
	return result;
};

// Driver function
function main() {
	// const node = new TreeNode(1);
	// node.left = new TreeNode(2);
	// node.right = new TreeNode(3);
	// node.left.left = new TreeNode(4);
	// node.left.right = new TreeNode(5);
	// node.right.left = new TreeNode(15);

	const node = new TreeNode(1);
	node.right = new TreeNode(2);
	node.right.right = new TreeNode(3);

	console.log(isBalanced(node));
}
main();