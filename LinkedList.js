// Linked List is regarded as a linear data structure the element are connected with pointers
// each element consist of a head and a tail  the tail of a node is pointing to the head(data ) of another node
// the tail of the last node most always be null because it is not pointing to another node

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.list = [];
  }

  //insert first node
  insert(data) {
    this.head = new Node(data, this.head);
  }

  //insert last node

  insertLastNode(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  printList() {
    let data = this.head;
    console.log(data, 'data')
    while (data) {
      data = data.next;
      console.log(data, 'current')
      this.list.push(data);
    }
  }
}
const l1 = new LinkedList();
// l1.insert(20);
l1.insert(30);

l1.insertLastNode(60);
l1.insert(50);
l1.printList();
console.log(l1);
