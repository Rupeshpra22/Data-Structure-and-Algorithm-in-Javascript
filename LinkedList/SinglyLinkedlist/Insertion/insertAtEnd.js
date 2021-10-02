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

  InsertAtBeginning(data){
    let newNode = new Node(data, this.head);
    this.head = newNode;
    this.size++;
}

insertAtEnd(data) {
    let node = new Node(data);
    if (this.head == null) {
        this.head = node;
        this.size++;
        return;
    }
    let curr = this.head;
    while (curr.next != null) {
        curr = curr.next;
    }
    curr.next = node;
    this.size++;
}
}

let newLinkedList = new LinkedList();
newLinkedList.insertAtEnd(10);
newLinkedList.insertAtEnd(20);
newLinkedList.InsertAtBeginning(5);
console.log(newLinkedList);
