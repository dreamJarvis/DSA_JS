/*
	105. Construct Binary Tree from Preorder and Inorder Traversal
	https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
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

var buildTree = function(preorder, inorder) {
    const n = inorder.length;
	const map = new Map();
	for(let i=0; i<n; i++) {
		map.set(inorder[i], i);
	}

    let index = 0
	function util(preorder, inorder, map, start, end){
		if(start > end || index > inorder.length)	return null;

		const root = new TreeNode(preorder[index]);
		const key = preorder[index++];

		if(start === end)	return root;

		const mid = map.get(key);

		root.left = util(preorder, inorder, map, start, mid-1);
		root.right = util(preorder, inorder, map, mid+1, end);
		
		return root;
	} 

	return util(preorder, inorder, map, 0, n-1);
};

// Driver function
function main() {
	const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
	traverseTree(buildTree(preorder, inorder));
}
main();