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
  get(i){
    //finds value at index provided
    //create a counter
    //while counter is less than value, increment and traverse.
    //return currentNode when index === val;
    if (i < 0 || i >= this.length) {
      return null;
    }
    var currentNode = this.head;
    var index = 0;
    while (index !== i) {
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
  insert(i, val) {
    //inserts a new node at index.
    //if no node exists or i is greater than length of list, return undefined
    if (i < 0 || i >= this.length) {
      return false;
    }
    if (i === 0) {
      this.unShift(val);
    }
    if (i === this.length) {
      this.push(val);
    }
    //create newNode
    var newNode = new Node(val);
    //create variable for previous node index.
    var previousIndex = i - 1;
    //create variable for current node index.
    var currentNode = this.get(i);
    var previousNode = this.get(previousIndex);
    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return true;
  }
  remove(i) {
    if (i < 0 || i >= this.length) return false;
    if (i === this.length - 1) return this.pop();
    if (i === 0) return this.shift();
    var nodeToRemove = this.get(i);
    var previousNode = this.get(i-1);
    previousNode.next = nodeToRemove.next;
    this.length--;
    return nodeToRemove;
  }
  reverse() {
    //5 4 3 2 1 || 1 2 3 4 5
    if (this.length === 0) return undefined;
    //IMPORTANT: doing too many reassignments confuses. Do 1 index at a time. If 1 is the current node, how do we iterate so that we reassign next values?
    //reversing list in place will save time and space.
    //simply re-assign head and tail nodes by using third variable for node
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    //using a for loop, reassign each node's next value
    var next;
    var prev = null;
    //1 2 3 4 5
    for (var i = 0; i < this.length; i++) {
      //first assign next to the next index of original list, we are saving this value for later;
      next = node.next;
      //re-assign CURRENT node's next value to prev, completing the tail portion of the list. This means 1 now has a next of null.
      node.next = prev;
      //re-assign previous to be current node, this will move the iteration forward
      prev = node;
      //re-assign current node to be next node for next iteration
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.reverse();
console.log(list)
