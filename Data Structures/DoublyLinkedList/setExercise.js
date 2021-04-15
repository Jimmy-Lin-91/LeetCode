class Node{
  constructor(val){
      this.val = val
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(val){
      this.length = 0;
      this.val = val;
      this.next = null;
  }
  push(val){
    var node = new Node(val);
    if (this.length === 0) {
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
  get(i) {
    if (i < 0 || i >= this.length) {
      return false;
    }
    var start = 0;
    var node = this.head;
    for (var index = 0; index < i; index++) {
      if (node.next) {
        node = node.next
      }
    }
    return node;
  }
  set(i, val){
    if (i < 0 || i >= this.length) {
      return false;
    } else {
      var node = this.get(i);
      node.val = val;
    }
    return true;
  }
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
// console.log(doublyLinkedList.get(0));
// console.log(doublyLinkedList.get(1));
console.log(doublyLinkedList.get(3));
// doublyLinkedList.set(0, 10); //true
// doublyLinkedList.set(10, 10); //false
// doublyLinkedList.set(2, 100); //true
// console.log(doublyLinkedList.head.next.next.val, 'to be 100');