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

/*
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDMTb4v6N6XqGZrij7S3sJc4sARsCmhy6c11RpR9L0brXHSQqmRSpgzPCC6/f2ZgfsabAI/oMXycgR/9L/r9/1VG1e4PlmedJrObZyH4KQuWTDyd/yOjqKoP9iYK939T4k4LS5vKMyvd7rxnaa6zaR86ceMsAKOzxeKkPhlKaeiwymK7ffbImJhCh8YnqAD1LNZAqHbaX5go1rZ+Tw6rk1qwyvfHI+xqLv331GepCQ5MywOD1xu2WdEHRAA0uf1+s7IqxXmwa+4JuwxztopXCRFXqsZKatYbHNH2rA7OOGTm6IPb074FrzMnEJBDWOHxpgG/7r0hJJVXg/qG5XIU3OZTb5dKuJ+B2ee5C1C8II+B0ve3xECKgF7aAFiUw2PB/9F/LbTJ+lh3l9YMds2bIeFnPwwIFejWhQiAc/w2pXiYslt5YCibr+JcFoQMSodvu15DWCC6zwnI1YWNpkpIWFeCAKTMb5roDIdMaYSeSWWE5RK3SFnJkYU8lsUnEk9HN8= tarun@tarun

*/