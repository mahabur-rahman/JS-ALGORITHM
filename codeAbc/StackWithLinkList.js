class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class BookStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    let book = new Node(value);

    if (!this.top) {
      this.top = book;
      this.bottom = book;
      this.length++;
    } else {
      let holdingBooks = this.top;
      this.top = book;
      this.top.next = holdingBooks;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return this;
  }
}

let allBookStack = new BookStack();
console.log(allBookStack.push("book1"));
console.log(allBookStack.push("book2"));

console.log(allBookStack.pop());
