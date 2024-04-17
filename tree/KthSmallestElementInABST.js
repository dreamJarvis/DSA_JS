/*
	230. Kth Smallest Element in a BST
	https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
*/
// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
	let result = -1;
	let cnt = 0;
	function util(root, k) {
		if(!root)	return 0;

		util(root.left, k);		
		
		cnt++;
		if(cnt===k)	{
			result = root;
		}
		
		util(root.right, k);
		return root;
	}
	util(root, k);

	return result?.val;
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