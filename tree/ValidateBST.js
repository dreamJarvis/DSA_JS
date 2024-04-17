/*
	98. Validate Binary Search Tree
	https://leetcode.com/problems/validate-binary-search-tree/description/
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

var isValidBST = function(root, min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER) {
	if (!root)	return true;
	if(root?.val < min || root?.val > max)	return false; 	
	
	return (
		isValidBST(root.left, min, root?.val) && 
		isValidBST(root.right, root?.val, max)
	);
};

// Driver function
function main() {
	const root = new TreeNode(2);
	root.left = new TreeNode(1);
	root.right = new TreeNode(1);

	// const root = new TreeNode(5);
	// root.left = new TreeNode(1);
	// root.right = new TreeNode(4);
	// root.right.left = new TreeNode(3);
	// root.right.right = new TreeNode(6);
	// root.left.right = new TreeNode(2);

	// const root = new TreeNode(5);
	// root.left = new TreeNode(4);
	// root.right = new TreeNode(6);
	// root.right.left = new TreeNode(3);
	// root.right.right = new TreeNode(7);

	console.log(isValidBST(root));
}
main();