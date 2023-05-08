class Queue {
  constructor() {
    this.arr = [];
  }

  // push
  push(value) {
    this.arr.unshift(value);
    return this.arr;
  }

  pop() {
    this.arr.pop();
    return this.arr;
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}

let queue = new Queue();
console.log(queue.push(15));
console.log(queue.push(25));
console.log(queue.push(255));

console.log(queue.pop());

console.log(queue.peek());
