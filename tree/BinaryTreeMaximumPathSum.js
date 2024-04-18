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
	let maxSum = Number.MIN_SAFE_INTEGER;
	function util(root) {
		if(!root)	return 0;

		const leftSum = util(root.left, maxSum);
		const rightSum = util(root.right, maxSum);

		const withoutChild = Math.max(root.val, root.val + Math.max(leftSum, rightSum));
		const withChild = Math.max(withoutChild, root.val + leftSum + rightSum);

		maxSum = Math.max(maxSum, withChild);
		return withoutChild;
	}

	util(root);
	return maxSum;
};

// Driver function
function main() {
	// const root = new TreeNode(-10);
	// root.left = new TreeNode(9);
	// root.right = new TreeNode(20);
	// root.right.left = new TreeNode(15);
	// root.right.right = new TreeNode(7);

	// const root = new TreeNode(1);
	// root.left = new TreeNode(2);
	// root.right = new TreeNode(3);

	const root = new TreeNode(-3);

	// const root = new TreeNode(2);
	// root.left = new TreeNode(-1)

	// const root = new TreeNode(1);
	// root.left = new TreeNode(-2)
	// root.right = new TreeNode(3)

	console.log(maxPathSum(root));	
}
main();