/*
	2. Add Two Numbers
	https://leetcode.com/problems/add-two-numbers/description/
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

// const reverseNums = (head) => {
// 	if(!head.next) return head.val;
// 	const temp = reverseNums(head.next);
// 	return (head.val + temp*10);
// };

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let res = dummy;
    let total = 0, carry = 0;

    while (l1 || l2 || carry) {
        total = carry;

        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }

        let num = total % 10;
        carry = Math.floor(total / 10);
        dummy.next = new ListNode(num);
        dummy = dummy.next;
    }

    return res.next;    
};

// Driver function
function main() {
	// const head1 = new ListNode(2);
	// head1.next = new ListNode(4);
	// head1.next.next = new ListNode(3);

	// const head2 = new ListNode(5);
	// head2.next = new ListNode(6);
	// head2.next.next = new ListNode(4);

	// const head1 = new ListNode(0);
	// const head2 = new ListNode(0);

	const head1 = new ListNode(9);
	head1.next = new ListNode(9);
	head1.next.next = new ListNode(9);
	head1.next.next.next = new ListNode(9);
	head1.next.next.next.next = new ListNode(9);
	head1.next.next.next.next.next = new ListNode(9);
	head1.next.next.next.next.next.next = new ListNode(9);

	const head2 = new ListNode(9);
	head2.next = new ListNode(9);
	head2.next.next = new ListNode(9);
	head2.next.next.next = new ListNode(9);


	const result = addTwoNumbers(head1, head2);
	console.log(traverse(result));
};
main();