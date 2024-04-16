
function Node(data, next) {
	this.next = null;
	this.data = data;
}

// Allocates a new node with given data
function newNode(data) {
	let new_node = new Node(data);
	return new_node;
}

// Function to insert a new node at the
// end of linked list using recursion.
function insertEnd(head, data) {
	// If linked list is empty, create a
	// new node (Assuming newNode() allocates
	// a new node with given data)
	if (head == null)
		return newNode(data);

	// If we have not reached end, keep traversing
	// recursively.
	else
		head.next = insertEnd(head.next, data);
	return head;
}

function traverse(head) {
	if (head == null)
		return;

	// If head is not null, print current node
	// and recur for remaining list
	console.log(head.data);

	traverse(head.next);
}

function main() {
	let head = null;
	head = insertEnd(head, 6);
	head = insertEnd(head, 8);
	head = insertEnd(head, 10);
	head = insertEnd(head, 12);
	head = insertEnd(head, 14);

	traverse(head);
}
main();