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
    
};

// Driver function
function main() {
	const node = new TreeNode(6);
	node.left = new TreeNode(2);
	node.right = new TreeNode(8);
	node.right.left = new TreeNode(7);
	node.right.right = new TreeNode(9);
	node.left.left = new TreeNode(0);
	node.left.right = new TreeNode(4);
	node.left.right.left = new TreeNode(3);
	node.left.right.right = new TreeNode(5);
	
	const p = node.left;
	const q = node.right;

	console.log(lowestCommonAncestor(node, p, q).val);
}
main();
