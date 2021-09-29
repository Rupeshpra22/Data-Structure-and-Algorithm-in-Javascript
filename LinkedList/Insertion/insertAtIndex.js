class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtBeginning(value) {
    let node = new Node(value, this.head);
    this.head = node;
    this.size++;
  }

  insertAtIndex(value, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if(index === 0){
        let newNode = new Node(value, this.head);
        newNode = this.head;
        this.size++;
        return;
    }
    let node = new Node(value);
    let curr = this.head;
    let prev;
    let count = 0;
    while(count<index){
        prev = curr;
        curr = curr.next;
        count++;
    }

    prev.next = node;
    node.next = curr;
    this.size++;
  }
}

let newLinkedList = new LinkedList();
newLinkedList.insertAtBeginning(10);
newLinkedList.insertAtBeginning(20);
newLinkedList.insertAtIndex(15,1)
console.log(newLinkedList);
