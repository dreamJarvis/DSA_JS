/*
	572. Subtree of Another Tree
	https://leetcode.com/problems/subtree-of-another-tree/description/
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

var sameTree = function(root, sub) {
    if(root === null && sub === null)	return true;
    if((root === null && sub) || (root && sub === null))	return false;
    if(root.val !== sub.val)	return false;

    return (sameTree(root.left,sub.left) && sameTree(root.right, sub.right));
}

var isSubtree = function(root, subroot) {
    if(subroot === null)	return true;    
    if(root === null)	return false;
    if(sameTree(root, subroot))	return true;
    
    return (isSubtree(root.left, subroot) || isSubtree(root.right, subroot));
    
};

// Driver function
function main() {
	// const node1 = new TreeNode(3);
	// node1.left = new TreeNode(4);
	// node1.right = new TreeNode(5);
	// node1.left.left = new TreeNode(1);
	// node1.left.right = new TreeNode(2);

	// const node2 = new TreeNode(4);
	// node2.left = new TreeNode(1);
	// node2.right = new TreeNode(2);

	const node1 = new TreeNode(1);
	node1.left = new TreeNode(1);

	const node2 = new TreeNode(1);

	console.log(isSubtree(node1, node2));
}
main();
