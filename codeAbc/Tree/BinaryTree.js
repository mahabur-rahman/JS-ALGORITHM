class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    } else {
      let currentNode = this.root;
      let added = false;

      while (!added && currentNode) {
        if (currentNode.value === value) {
          console.log(`Not allowed!`);
          return `not allowed!`;
        }

        if (value < currentNode.value) {
          // go to left
          if (currentNode.leftChild === null) {
            currentNode.leftChild = new Node(value);
            added = true;
          } else {
            currentNode = currentNode.leftChild;
          }
        } else if (value > currentNode.value) {
          // go to right
          if (currentNode.rightChild === null) {
            currentNode.rightChild = new Node(value);
            added = true;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }
}

let BST = new BinarySearchTree();
BST.addChild(12);
BST.addChild(10);
BST.addChild(15);

console.log(BST);
