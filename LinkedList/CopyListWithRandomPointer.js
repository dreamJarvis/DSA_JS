/*
	138. Copy List with Random Pointer
	https://leetcode.com/problems/copy-list-with-random-pointer/description/
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

var copyRandomList = function(head) {
	const mp = new Map();
	let temp = head;
	let dummy = null;  
	let curr = null;
	
	while(head) {
		if(!curr) {
			curr = new ListNode(head.val);
			dummy = curr;
			mp.set(head, curr);
			head = head.next;
			continue;
		}
		curr.next = new ListNode(head.val);
		mp.set(head, curr.next);
		head = head.next;
		curr = curr.next;
	}

	while(temp) {
		if(temp.random)	mp.get(temp).random = mp.get(temp.random);
		temp = temp.next;
	}

	return dummy;
};

// driver function
function main() {
	const head = new ListNode(1);
	head.next = new ListNode(2);
	head.next.next = new ListNode(3);
	head.next.next.next = new ListNode(4);
	head.next.next.next.next = new ListNode(5);
	const n = 2;

}
main();