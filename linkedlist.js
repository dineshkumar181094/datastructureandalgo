class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++;
    return this ; 
}

prepend(value) {
  const newNode = {
    value: value,
    next: this.head
  }
  this.head = newNode
  this.length++;
  return this;
}
traversToIndex(index) {
  let counter = 0
  this.currentNode = this.head
  while(counter != index) {
    this.currentNode = this.currentNode.next
    counter++
  }
  return this.currentNode
}
insert(index,value) {

  if ( index ===1) {
    prepend(value)
  }
  else if (index >=this.length) {
    append(value)
  }
  let newNode = new Node(value)
  let leaderNode = this.traversToIndex(index-1)
  newNode.next = leaderNode.next
  leaderNode.next = newNode

  console.log("===========",leaderNode)
  return this
}
remove(index) {
  let leaderNode = this.traversToIndex(index-1)
  temleaderNode = this.leaderNode.next.next
  leaderNode.next = this.leaderNode.next.next
  delete leader
}
}




myLinkedList = new linkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
a = myLinkedList.prepend(20);
myLinkedList.insert(2,15)
console.log(JSON.stringify(a,null, 2));
