/*
	141. Linked List Cycle
	https://leetcode.com/problems/linked-list-cycle/description/
*/
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

const reverseNums = (head) => {
	if(!head.next) return head.val;
	const temp = reverseNums(head.next);
	return (head.val + temp*10);
};

var hasCycle = function(head) {
	if(!head) return false;

	let firstPtr = head;
	let secondPtr = head;

	while(secondPtr && secondPtr.next) {
		firstPtr = firstPtr.next;
		secondPtr = secondPtr.next.next;

		if(firstPtr === secondPtr)	return true;
	}

	return false; 
};

// Driver function
function main() {
	const head1 = new ListNode(2);
	head1.next = new ListNode(4);
	head1.next.next = new ListNode(3);

	console.log(reverseNums(head1));
};
main();