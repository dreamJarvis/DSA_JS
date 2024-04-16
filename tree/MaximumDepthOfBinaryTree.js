/*
	104. Maximum Depth of Binary Tree
	https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	if(!root)	return 0;
	const left = maxDepth(root.left);
	const right = maxDepth(root.right);
	return Math.max(left+1, right+1);
};

// Driver function
function main() {
	const node = new TreeNode(3);
	node.left = new TreeNode(9);
	node.right = new TreeNode(20);
	node.right.left = new TreeNode(15);
	node.right.right = new TreeNode(7);

	console.log(maxDepth(node));
}
main();