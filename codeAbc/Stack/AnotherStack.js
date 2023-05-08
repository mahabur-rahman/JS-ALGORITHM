class AnotherStack {
  constructor() {
    this.database = {};
    this.count = 0;
  }

  push(value) {
    this.count++;
    this.database[this.count] = value;
    return this.database;
  }

  pop() {
    let deleteItem = this.database[this.count];
    delete this.database[this.count];
    this.count--;
    return deleteItem;
  }
  peek() {
    return this.database[this.count];
  }
}

let stack1 = new AnotherStack();

console.log(stack1);
console.log(stack1.push(10));
console.log(stack1.push(15));
console.log(stack1.pop());
console.log(stack1.peek());
