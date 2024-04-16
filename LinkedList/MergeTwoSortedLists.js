/*
	21. Merge Two Sorted Lists
	https://leetcode.com/problems/merge-two-sorted-lists/description/
*/

// Definition for singly-linked list.
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
	let ptr1 = list1, ptr2 = list2;
	let currList = new ListNode(-1);
	let headPtr = currList;

	while(ptr1 !== null && ptr2 !== null) {
		if(ptr1.val >= ptr2.val) {
			currList.next = new ListNode(ptr2.val);
			ptr2 = ptr2.next;
		} else {
			currList.next = new ListNode(ptr1.val);
			ptr1 = ptr1.next;
		}

		currList = currList.next;
	}

	while(ptr1 !== null) {
		currList.next = new ListNode(ptr1.val);
		ptr1 = ptr1.next;
		currList = currList.next;
	}

	while(ptr2 !== null) {
		currList.next = new ListNode(ptr2.val);
		ptr2 = ptr2.next;
		currList = currList.next;
	}

	return headPtr.next;
};

// driver function
function main() {
	// const head1 = new ListNode(1);
	// head1.next = new ListNode(2);
	// head1.next.next = new ListNode(4);

	// const head2 = new ListNode(1);
	// head2.next = new ListNode(3);
	// head2.next.next = new ListNode(4);

	const head1 = null;

	const head2 = new ListNode(0)

	traverse(mergeTwoLists(head1, head2));
}
main();