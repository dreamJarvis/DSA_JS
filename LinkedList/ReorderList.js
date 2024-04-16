/*
	143. Reorder List
	https://leetcode.com/problems/reorder-list/description/
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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
	let temp = head;
	const st = [];
	while(temp) {
		st.push(temp);
		temp = temp.next;
	}

	temp = head;
	while(temp.next && st.length) {
		const nxt = temp.next;
		const lst = st.pop();

		/* 
			both pointers will corss earch other at this point 
			if n%2 == 1 (odd no. of elements)
		*/
		if(nxt === lst) {
			lst.next = null;
			return
		}
		/* 
			both pointers have reached the same element 
			if n%2 == 0 (even no. of elements)
		*/		 
		if(temp === lst){
			temp.next = null;
			return;
		}

		temp.next = lst;
		lst.next = nxt;

		temp = nxt;
	}
	temp.next = null;
}

// driver function
function main() {
	const head = new ListNode(1);
	head.next = new ListNode(2);
	head.next.next = new ListNode(3);
	head.next.next.next = new ListNode(4);
	head.next.next.next.next = new ListNode(5);

	reorderList(head);
	// reorderList2(head);
	traverse(head);
}
main();