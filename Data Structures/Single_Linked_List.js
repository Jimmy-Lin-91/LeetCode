//piece of data where val = value of node
//reference to next node with "next" property
//* has head
//* had tail
class Node {
  constructor(val) {
    this.val = val;
    this.next= null;
  }
}

class SinglyLinkedList{
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    //create new node
    //set previous tail.next to new node
    //set tail to new node;
    var newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }
  pop() {
    //traverse linked list,
    //as long as there is a 'next', assign current node to tail (because we are removing the .next node when we find a null for .next's "next")
    if (this.head === null) {
      return undefined;
    }
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  unShift(val) {
    //add value to the beginning of linkedlist
    //if list is empty, head and tail become newNode
    //else if not empty, newNode becomes head, newNode.next becomes previous head.
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      var currentNode = this.head;
      this.head = newNode;
      this.head.next = currentNode;
      this.length++;
    }
    return this;
  }
  shift(){
    //remove first index of linked list.
    //set newHead to be this.head.next
    //if length of list is 0 return undefined.
    //if removing 1 from length results in 0, set head and tail to null;
    if (this.length === 0) {
      return undefined;
    }
    var newHead = this.head.next;
    this.length--;
    this.head = newHead;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
  get(val){
    //finds value at index provided
    //create a counter
    //while counter is less than value, increment and traverse.
    //return currentNode when index === val;
    if (val < 0 || val >= this.length) {
      return null;
    }
    var currentNode = this.head;
    var index = 0;
    while (index !== val) {
      currentNode = currentNode.next;
      index++;
    }
    return currentNode;
  }
  set(i, val){
    //changes value of node based on position
    //use .get() to find node
    //update that value
    var node = this.get(i);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.set(0, "schmooblydong");
console.log(list);

