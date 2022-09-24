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
    this.arr = [];
    this.size = 0;
  }
  // inserting the first Node
  insertFirstNode(data) {
    this.head = new Node(data, this.head);
  }

  printListOfNode() {
    let current = this.head;
    // console.log(data.next, 'to check head')
    while (current !== null) {
      console.log(current.data ,'data');
      this.arr.push(current.data);
      current = current.next;
    }
    // console.log(this.arr, "my arr");
  }
  insertLastNode(data) {
    // new node to be created
    let node = new Node(data);
    // current state of the node
    let current;
    //check if head is null ie no data
    if (!this.head) {
      this.head = node;
    } else {
      // if data then current is set to the head
      current = this.head;
      // check if the node is referencing another node
      while (current.next) {
        // update the current node to be the next node
        current = current.next;
      }
      // this holds if the node is referencing another node
      current.next = node;
    }
  }

  insert_AtIndex(data, index) {
    let node = new Node(data); // create a new node

    // check for some edge cases

    if (index > 0 && index > this.size) return;

    if (index === 0) {
      this.head = node;
      return;
    }
    let current;
    let previous; // to update the previous and next value
    let counter = 0; //to keep track of the nodes
    current = this.head;
    while (counter < index) {
      previous = current;
      counter++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
  }

  //insert at index

  // search

  searchElement(key) {
    if (!this.head) {
      return "No data to search through";
    }
    let data = this.head;
    while (data) {
      if (data.data == key) {
        // console.log("true");
        return true;
      }
      data = data.next;
    }
    return false;
  }

  getAtIndex(index) {
    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter === index) {
        console.log(current.data);
      }
      counter++;
      current = current.next;
    }
  }

  removeAtIndex(index) {
    let current = this.head;
    let counter = 0;
    let previous;
    if (index == 0) {
      this.head = current.next;
    } else {
      while (counter < index) {
        counter++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
  }
}

let ll = new LinkedList();
ll.insertFirstNode(40);
ll.insertFirstNode(50);
ll.insertFirstNode(90);
ll.insertLastNode(80);
ll.insertLastNode(70);
// ll.searchElement(100);
// ll.insert_AtIndex(500, 0);
ll.insert_AtIndex(200, 1);
ll.insert_AtIndex(200, 2);
// ll.getAtIndex(0);
ll.removeAtIndex(3);
ll.printListOfNode();

