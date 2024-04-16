/*
	23. Merge k Sorted Lists
	https://leetcode.com/problems/merge-k-sorted-lists/description/
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

const mergeTwoLists = (list1, list2) => {
    if(!list1) return list2;
    if(!list2) return list1;
    if(!list1 && !list2) return null;

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length===0) return null;
    while(lists.length > 1){
        let l1 = lists.pop();	// pop's the element from the array tail
        let l2 = lists.pop();
        lists.unshift(mergeTwoLists(l1, l2)); // add the item to the front of the array
    }
    return lists[0];
};

// driver function
function main() {
	const head1 = new ListNode(1);
	head1.next = new ListNode(4);
	head1.next.next = new ListNode(5);

	const head2 = new ListNode(1);
	head2.next = new ListNode(3);
	head2.next.next = new ListNode(4);

	const head3 = new ListNode(2);
	head3.next = new ListNode(6);

	// const head = null;

	traverse(mergeKLists([head1, head2, head3]));
};
main();