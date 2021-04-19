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
}

var tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.find(13));
