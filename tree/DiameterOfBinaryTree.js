/*
	543. Diameter of Binary Tree
	https://leetcode.com/problems/diameter-of-binary-tree/description/
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

// var maxDepth = function(root) {
// 	if(!root)	return 0;
// 	const left = maxDepth(root.left);
// 	const right = maxDepth(root.right);
// 	return Math.max(left+1, right+1);
// };

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var diameterOfBinaryTree = function(root) {
// 	if(!root) return 0;

// 	const left = diameterOfBinaryTree(root.left);
// 	const right = diameterOfBinaryTree(root.right);

// 	return Math.max(
// 		Math.max(left, right),
// 		left+right+1
// 	);
// };

var diameterOfBinaryTree = function(root) {
    let max = 0;
    function traverse(node) {
        if (!node) {
            return 0;
        }
        const left = traverse(node.left);
        const right = traverse(node.right);
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
    traverse(root);
    return max;
};

// Driver function
function main() {
	const node = new TreeNode(1);
	node.left = new TreeNode(2);
	node.right = new TreeNode(3);
	node.left.left = new TreeNode(4);
	node.left.right = new TreeNode(5);
	node.right.left = new TreeNode(15);

	console.log(diameterOfBinaryTree(node));
}
main();