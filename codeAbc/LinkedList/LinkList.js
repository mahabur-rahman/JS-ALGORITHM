class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    let newNode = {
      value: value,
      next: null,
    };

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      let removeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;

      return removeNode;
    }

    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;

    while (currentNode) {
      if (currentNode.next === this.tail) {
        newLastNode = currentNode;
        break;
      }

      currentNode = currentNode.next;
    }
    newLastNode.next = null;
    this.tail = newLastNode;
    this.length--;
    return lastNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    this.currentNode = this.head;
    this.head = this.currentNode.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return this.currentNode;
  }

  unshift() {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  showList() {
    let arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.value);

      currentNode = currentNode.next;
    }

    return arr;
  }
}

let list = new SinglyLinkedList();
// console.log(list);

// console.log(list.isEmpty());
// list.push(5);
// list.push(10);
// list.push(15);

// list.shift();

// console.log(list);

list.push(10);
list.push(30);
list.push(10);
// list.unshift(5);

console.log(list.showList());

// console.log(list.isEmpty());
