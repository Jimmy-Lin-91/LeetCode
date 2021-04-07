class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var oldTail = this.tail;
      oldTail.next = newNode;
      newNode.previous = oldTail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    //removes last node from list
    //re-assign second to last node as tail. Set the new tail's next to null;
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var newTail = this.tail.previous;
      var previousTail = this.tail;
      newTail.next = null;
      previousTail.previous = null;
      this.tail = newTail;
    }
    this.length--;
    return newTail;
  }
  shift(){
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var currentHead = this.head;
      var newHead = this.head.next;
      currentHead.next = null;
      newHead.previous = null;
      this.head = newHead;
    }
    this.length--;
    return currentHead;
  }
  unShift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(i) {
    if (i < 0 || i >= this.length) {
      return undefined;
    }
    var midPoint = Math.floor(this.length/2);
    if (i <= midPoint) {
      var node = this.head;
      var start = 0;
      while (start < i) {
        node = node.next;
        start++;
      }
    } else {
      var node = this.tail;
      var end = this.length - 1;
      while (end > i) {
        node = node.previous;
        end--;
      }
    }
    return node;
  }
  set(i, val) {
    if (i < 0 || i >= this.length) {
      return undefined;
    }
    if (i === this.length - 1) {
      this.tail.val = val;
    }
    if (i === 0) {
      this.head.val = val;
    }
    var nodeToChange = this.get(i);
    nodeToChange.val = val;
    return this;
  }
  insert(i, val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    if (i === 0) {
      this.unShift(newNode);
    }
    if (i === this.length - 1) {
      this.push(newNode);
    }
    var previousNode = this.get(i-1);
    var oldNext = previousNode.next;
    previousNode.next = newNode;

  }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.unShift(0);
list.unShift(-1);
console.log(list.set(1, 'googly'));

