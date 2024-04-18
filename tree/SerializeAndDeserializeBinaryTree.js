/*
	297. Serialize and Deserialize Binary Tree
	https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const traverseTree = (root) => {
	if(!root)	return root;

	traverseTree(root.left);
	console.log(root?.val);
	traverseTree(root.right);
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result=[];
    function util(root) {
      if(!root){ 
      	result.push("#");
      	return null;
      }
      result.push(root?.val);
      const left = util(root.left);
      const right = util(root.right);
    }
 	util(root);
 	return result.toString();   
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const arr = data.split(',');
    const n = arr.length;
    let index = 0;

    function util(arr) {
    	if(index >= n)	return null;
    	if(arr[index] === '#'){	
    		index++;
    		return null;
    	}

	    const root = new TreeNode(arr[index++]);
    	root.left = util(arr, root);
    	root.right = util(arr, root);

    	return root;
    }

    return util(arr);
};

// Driver function
function main() {
    // const root = new TreeNode(2);
    // root.left = new TreeNode(1);
    // root.right = new TreeNode(3);

    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);

    // const root = new TreeNode(5);
    // root.left = new TreeNode(4);
    // root.right = new TreeNode(6);
    // root.right.left = new TreeNode(3);
    // root.right.right = new TreeNode(7);

	const arr = serialize(root);
	console.log(arr);
	traverseTree(deserialize(arr));
}
main();