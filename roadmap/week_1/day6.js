// Step 1: Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Step 2: Create Linked List
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

// Connect nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Head of the list
let head = node1;

// Step 3: Print Linked List
function printList(head) {
  let current = head;
  const values = [];

  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  console.log(values.join(" → ") + " → null");
}

// Step 4: Reverse Linked List
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next; // Save next node
    current.next = prev;       // Reverse the link
    prev = current;            // Move prev forward
    current = next;            // Move current forward
  }

  return prev; // New head
}

// Before reverse
console.log("Before Reverse:");
printList(head);

// Reverse
head = reverseList(head);

// After reverse
console.log("\nAfter Reverse:");
printList(head);