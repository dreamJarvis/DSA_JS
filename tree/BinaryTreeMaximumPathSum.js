/*
	124. Binary Tree Maximum Path Sum
	https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
*/
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const traverseTree = (root) => {
    if(!root) return root;
    traverseTree(root.left);
    console.log(root.val);
    traverseTree(root.right);
    return root;
}

var maxPathSum = function(root) {
    
};

// Driver function
function main() {
	const root = new TreeNode(3);
	root.left = new TreeNode(1);
	root.right = new TreeNode(4);
	root.left.right = new TreeNode(1);
	console.log(kthSmallest(root, 1));

	// const root = new TreeNode(5);
	// root.left = new TreeNode(3);
	// root.right = new TreeNode(6);
	// root.left.left = new TreeNode(2);
	// root.left.right = new TreeNode(4);
	// root.left.left.left = new TreeNode(1);
	// console.log(kthSmallest(root, 3));

	// const root = new TreeNode(1);
	// console.log(kthSmallest(root, 1));
}
main();