/*
	19. Remove Nth Node From End of List
*/

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

const traverse = (head) => {
	if(!head)	return;
	console.log(head.val);
	traverse(head.next);
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/*
	2 pass algo/ tortoise-hare algo/ fast-slow ptr algo
*/
var removeNthFromEnd = function(head, n) {
	const dummy = new ListNode(0);
	dummy.next = head;

	let firstPtr = dummy;
	let secondPtr = dummy;

	for(let i=0; i<=n; i++)
		firstPtr = firstPtr.next;

	while(firstPtr) {
		firstPtr = firstPtr.next;
		secondPtr = secondPtr.next;
	}

	secondPtr.next = secondPtr.next.next;
	return dummy.next;
};

// driver function
function main() {
	const head = new ListNode(1);
	head.next = new ListNode(2);
	head.next.next = new ListNode(3);
	head.next.next.next = new ListNode(4);
	head.next.next.next.next = new ListNode(5);
	const n = 2;

	// const head = new ListNode(1);
	// head.next = new ListNode(2);
	// head.next.next = new ListNode(3);
	// const n = 1;

	removeNthFromEnd(head, n);
	traverse(head);
}
main();