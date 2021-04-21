class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }
  insert(val){
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if(val === current.val) return undefined;
      if(val < current.val){
          if(current.left === null){
              current.left = newNode;
              return this;
          }
          current = current.left;
      } else {
          if(current.right === null){
              current.right = newNode;
              return this;
          }
          current = current.right;
      }
    }
  }
  find(val) {
    if (!this.root) {
      return undefined;
    }
    //if val is less than root
    //check left
    //if val is greater than root
    //check right
    const checkNode = (node, val) => {//root 10. node 11
      if (node.val === val) {
        return node;
      } else {
        if (val < node.val && node.left) {
          node = node.left;
          return checkNode(node, val);
        } else if (val > node.val && node.right) {
          node = node.right;
          return checkNode(node, val);
        }
      }
      return false;
    }
    return checkNode(this.root, val);
  }
  BFS(){
    //breadth first search visits all children in a horizontal way. Visit siblings first.
    //In order to track, create array for queue and array for data.
    //We start by putting the first node (root) into the queue. This is where we start.
    //*****remember to assign curNode to the node being checked.
    //this queue format will make sure that we first find the children of each node and add them to the call stack before moving on.
    var data = [],
    queue = [];
    let curNode = this.root;
    //keep track of the node instead of the val for left and right.
    queue.push(curNode);
    //while queue.length
    while (queue.length) {
      curNode = queue.shift();
      data.push(curNode.val);
      //if curNode.left, queue.push(curNode.left)
      if (node.left) {
        queue.push(node.left);
      }
      //if curNode.right, queue.push(curNode.right)
      if (node.right) {
        queue.push(node.left);
      }
    }
    return data;
  }
}