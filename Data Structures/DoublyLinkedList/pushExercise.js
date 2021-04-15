//DLL push-exercise

class Node{
  constructor(val){
      this.val = val
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(val){
      this.val = val
      this.next = null;
      this.length = 0;
  }
   push(val){
  //create a new node with val given
  let newNode = new Node(val);
  //check:
  //1. If there is no head, this is the new head and tail;
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    //2. Find oldLastNode
    //3. set oldLastNode.next to equal newNode, set newNode.previous to equal oldLastNode.
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;
  return this;
}
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5);
console.log(doublyLinkedList.length, 'should be 1');
console.log(doublyLinkedList.head.val, 'should be 5');
console.log(doublyLinkedList.tail.val, 'should be 5');
console.log(doublyLinkedList.head.prev, 'should be null');
doublyLinkedList.push(10);
console.log(doublyLinkedList.head.next.val, 'should be 10');
console.log(doublyLinkedList.tail.val, 'should be 10');
console.log(doublyLinkedList.head.next.prev.val, 'should be 10');
doublyLinkedList.push(15);
console.log(doublyLinkedList.length, 'should be 3');
console.log(doublyLinkedList.head.val, 'should be 5');
console.log(doublyLinkedList.tail.val, 'should be 15');
console.log(doublyLinkedList.tail.prev.val, 'should be 10');
console.log(doublyLinkedList.head.next.next.val, 'should be 15');
