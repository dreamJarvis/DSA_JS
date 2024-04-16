/*
	25. Reverse Nodes in k-Group
	https://leetcode.com/problems/reverse-nodes-in-k-group/description/
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
	let n=0;
	let tmp = head;

	while(tmp) {
		tmp = tmp.next; n++;
	}

  	if(n < k)	return head;
	if(n == k) {
		let curr = head, prev = null;
		while(curr) {
			const currNext = curr.next;
			curr.next = prev;
			prev = curr;
			curr = currNext;
		}

		return prev;
	}

	let idx=0;
	let dummy = new ListNode(0, head);
	let newHead = null;
	let prevTail = null;
	let curr = head;
	while(curr) {
		let prevStart = curr;
		let prev = null;
		let cnt = k;

		if(idx+k-1 >= n) {
			prevTail.next = curr;
			break;
		}

		for(let i=0; i<k; i++) {
			const currNext = curr.next;
			curr.next = prev;
			prev = curr;
			curr = currNext;
		}

		if(!prevTail) {
			newHead = prev;
		} else {
			prevTail.next = prev;
		}

		prevTail = prevStart;	
		idx += k;
	}

	return newHead;
}

// driver function
function main() {
	const head = new ListNode(1);
	head.next = new ListNode(2);
	head.next.next = new ListNode(3);
	head.next.next.next = new ListNode(4);
	head.next.next.next.next = new ListNode(5);

	// const head2 = new ListNode(1);
	// head2.next = new ListNode(3);
	// head2.next.next = new ListNode(4);

	// const head3 = new ListNode(2);
	// head3.next = new ListNode(6);


	traverse(reverseKGroup(head, 3));
};
main();