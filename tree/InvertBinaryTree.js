/*
	226. Invert Binary Tree
	https://leetcode.com/problems/invert-binary-tree/description/
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

const traverseTree = (root) => {
	if(!root)	return null;
	traverseTree(root.left);
	console.log(root.val);
	traverseTree(root.right);
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root || !root.left && !root.right) return root;

    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
};

// Driver function
function main() {
	const node = new TreeNode(4);
	node.left = new TreeNode(2);
	node.right = new TreeNode(7);
	node.left.left = new TreeNode(1);
	node.left.right = new TreeNode(3);
	node.right.left = new TreeNode(6);
	node.right.right = new TreeNode(9);

	traverseTree(invertTree(node));
}
main();