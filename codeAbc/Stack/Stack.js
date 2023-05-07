class Stack {
  constructor() {
    this.arr = [];
  }

  added(value) {
    this.arr.push(value);
    return this.arr;
  }

  remove() {
    this.arr.pop();
    return this.arr;
  }

  lookUp() {
    return this.arr[this.arr.length - 1];
  }
}

let stack = new Stack();
console.log(stack.added(23));
console.log(stack.added("sumit"));
console.log(stack.added(45));

// console.log(stack.remove());
console.log(stack.lookUp());
