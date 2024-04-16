/*
	206. Reverse Linked List
	https://leetcode.com/problems/reverse-linked-list/description/
*/

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
 }

const traverse = (head) => {
	if(!head) return;
	console.log(head.val);
	traverse(head.next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseHead = null;
var reverseList = function(head) {
	if(head?.next == null)	{
		reverseHead = head;
		return head;
	}  

	const nextNode = reverseList(head.next);
	
	nextNode.next = head;
	head.next = null;
	
	return head;
};

// driver function
function main() {
	const head = new ListNode(1);
	head.next = new ListNode(2);
	head.next.next = new ListNode(3);
	head.next.next.next = new ListNode(4);
	head.next.next.next.next = new ListNode(5);

	// let reverseHead = null;
	reverseList(head);
	traverse(reverseHead);
};
main();