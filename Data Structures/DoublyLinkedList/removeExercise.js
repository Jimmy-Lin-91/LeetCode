class Node{
  constructor(val){
      this.val = val
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(val){
      this.val = val;
      this.length = 0;
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
    var node = this.head;
    for (var index = 0; index < i; index++) {
      if (node.next) {
        node = node.next;
      }
    }
    return node;
  }
  remove(i){
    if (i < 0 || i >= this.length) {
      return undefined;
    }
    if (i === this.length - 1) {
      this.pop();
    } else if (i === 0) {
      this.shift();
    } else {
      var nodeToRemove = this.get(i);
      var prevNode = nodeToRemove.prev;
      var nextNode = nodeToRemove.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length--;
      return nodeToRemove;
    }
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1 ) {
      var oldHead = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldHead
    } else {
      var oldTail = this.tail;
      var oldPrev = this.tail.prev;
      this.tail = oldPrev;
      oldPrev.next = null;
      this.length--;
      return oldTail;
    }
  }

}
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.remove(2).val, 'to be 15');
console.log(doublyLinkedList.remove(100), 'to be undefined');
console.log(doublyLinkedList.length, 'to be 3');
console.log(doublyLinkedList.head.val, 'to be 5');
console.log(doublyLinkedList.head.next.val, 'to be 10');
console.log(doublyLinkedList.head.next.next.val, 'to be 20');