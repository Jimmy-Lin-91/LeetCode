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
    var node = new Node(val);
    if (this.head === null) {
        this.head = node;
        this.tail = this.head;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.length++;
      return this;
    }
    unshift(val){
      let newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        var oldHead = this.head;
        oldHead.prev = newNode;
        newNode.next = oldHead;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.unshift(5);
console.log(doublyLinkedList.length, 'to be 1');
console.log(doublyLinkedList.head.val, 'to be 5');
console.log(doublyLinkedList.tail.val, 'to be 5');
doublyLinkedList.unshift(10);
console.log(doublyLinkedList.length, 'to be 2');
console.log(doublyLinkedList.head.val, 'to be 10');
console.log(doublyLinkedList.tail.val, 'to be 5');
doublyLinkedList.unshift(15);
console.log(doublyLinkedList.length, 'to be 3');
console.log(doublyLinkedList.head.val, 'to be 15');
console.log(doublyLinkedList.tail.val, 'to be 5');
console.log(doublyLinkedList.head.next.next.val, 'to be 5');
