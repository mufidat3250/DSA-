//at the end of this section i must be able to

// create a node and understand
let head = null;

let size = 0;
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
function printList() {
  let current = head;
  while (current !== null) {
    console.log(current.data, "current");
    current = current.next;
  }
}
function insertFirstNode(data) {
  head = new Node(data, head);
  size++;
}

function InsertLastNode(data) {
  let node = new Node(data);
  if (!head) {
    head = node;
    return;
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  size++;
}

function insert_AtIndex(data, index) {
  let node = new Node(data);
  let current, previous;
  let counter = 0;
  if (index > 0 && index > size) {
    InsertLastNode(data);
    return;
  } else if (index === 0) {
    insertFirstNode(data);
    return;
  } else {
    current = head;
    while (counter < index) {
      previous = current;
      counter++;
      current = current.next;
    }
    previous.next = node;
    node.next = current;
  }
  size++;
}

function getAtIndex(index) {
  let current = head;
  let counter = 0;
  if (!current) {
    console.log("no data");
    return null;
  } else {
    while (current) {
      if (counter == index) {
        console.log(current.data);
      }
      counter++;
      current = current.next;
    }
  }
}
function removeAtIndex(index) {
  let previous, current;
  let counter = 0;
  current = head;
  if (index > 0 && index > size) return;
  if (index === 0) {
    head = current.next;
  } else {
    while (counter < index) {
      previous = current;
      counter++;
      current = current.next;
    }
    previous.next = current.next;
  }
  size--;
}
function searchNode(key) {
  let current = head;
  if (!head) {
    return;
  }
  while (current) {
    if (current.data == key) {
      console.log(true)
    }
    current = current.next;
  }
  return false
}
insertFirstNode(200);
insertFirstNode(600);
InsertLastNode(202);
// getAtIndex(2);
insert_AtIndex(400, 1);
removeAtIndex(0);
// removeAtIndex(1);
console.log(searchNode(250))
printList();
