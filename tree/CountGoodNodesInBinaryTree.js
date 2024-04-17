/*
	1448. Count Good Nodes in Binary Tree
	https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/
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
var goodNodes = function(root) {
	if(!root)	return 0;

	let goodNodesCnt = 0;
	function util(root, maxTillHere) {
		if(!root)	return 0;

		if(root?.val >= maxTillHere)	{
			goodNodesCnt++;
		}

		maxTillHere = Math.max(maxTillHere, root?.val);
		return util(root.left,maxTillHere) || util(root.right, maxTillHere);
	}
	util(root, root?.val);
	
	return goodNodesCnt;
};

// Driver function
function main() {
	const root = new TreeNode(3);
	root.left = new TreeNode(1);
	root.left.left = new TreeNode(3);
	root.right = new TreeNode(4);
	root.right.left = new TreeNode(1);
	root.right.right = new TreeNode(5);

	// const root = new TreeNode(3);
	// root.left = new TreeNode(3);
	// root.left.left = new TreeNode(3);
	// root.left.left = new TreeNode(4);
	// root.left.right = new TreeNode(2);

	console.log(goodNodes(root));
}
main();
