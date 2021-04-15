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
  }
  push(val){
    let newNode = new Node(val);
    if (this.head === null) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){

  }
}
let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
console.log(doublyLinkedList);