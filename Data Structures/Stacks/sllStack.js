//stack is just a concept. The order of operation is what makes it a stack.
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    }
    if (this.size === 1) {
      var curNode = this.first;
      newNode.next = curNode;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (this.size === 0) {
      return undefined;
    }
    if (this.size === 1) {
      var temp = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return temp;
    }
    var oldFirst = this.first;
    var oldNext = oldFirst.next;
    this.first = oldNext;
    oldFirst.next = null;
    this.size--;
    return oldFirst.value;
  }
}
var stack = new Stack();
console.log(stack.push('jeremy'));
console.log(stack.push('gwen'));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size);
