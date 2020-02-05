class Node {
  constructor(value) {
  this.value = value
  this.left = null
  this.right = null
  }
}

class BinarSearchTree {
constructor () {
  this.root = null
}
insert(value) {
 let newNode = new Node(value)
 if(this.root === null){
   this.root = newNode
   return this
 } 
 else {
   let currentNode = this.root
   while(true) {
     if(value < currentNode.value) {
       //takeleft 
       if(currentNode.left === null) {
         currentNode.left = newNode
         return this
       }
       else {
         currentNode = currentNode.left
       }
     }
     else {
       //take right
       if (currentNode.right === null) {
         currentNode.right = newNode
         return this
       }
       else {
         currentNode = currentNode.right
       }

     }
   }
   
 }
}
lookup(value) {
  if(!this.root) {
    return "no such value"
  }
  else {
    let currentNode = this.root 
    while(true) {
       if (currentNode == null) {
        return "not found"
      }
      else if (currentNode.value == value) {
        return "found"
      }
      else if (currentNode == null) {
        return "not found"
      }
      else if (value > currentNode.value) {
        currentNode = currentNode.right
      }
      
    }
  }

}
}

binartree = new BinarSearchTree()
binartree.insert(9)
binartree.insert(4)
binartree.insert(6)
binartree.insert(20)
binartree.insert(170)
binartree.insert(15)
JSON.stringify(binartree.insert(1))
binartree.lookup(170)

