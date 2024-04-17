/*
	199. Binary Tree Right Side View
	https://leetcode.com/problems/binary-tree-right-side-view/description/
*/
// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const stack = [root];
    const rightView = [];
    while(stack && stack.length > 0) {
    	let k = stack.length;
    	rightView.push(stack[stack.length-1].val);
    	while(k) {
    		const node = stack.shift();
    		if(node?.left)	stack.push(node.left);
    		if(node?.right)	stack.push(node.right);
    		k--;
    	}
    }

    return rightView;
};

// Driver function
function main() {
	const node = new TreeNode(3);
	node.left = new TreeNode(9);
	node.right = new TreeNode(20);
	node.right.left = new TreeNode(15);
	node.right.right = new TreeNode(7);
		
	const result = rightSideView(node);
	console.log(result);
}
main();