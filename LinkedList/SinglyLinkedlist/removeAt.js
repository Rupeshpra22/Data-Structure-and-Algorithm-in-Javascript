class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtBeginning(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
    this.size++;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let curr = this.head;
    let prev;
    let count = 0;

    if (index == 0) {
        this.head = curr.next;
        this.size--;
        return;
    }

    while(count<index){
        prev = curr;
        curr = curr.next;
        count++;
    }

    prev.next = curr.next;
    this.size--;
  }

  clearLinkedList(){
      this.head = null;
      this.size = 0;
  }
  
}

let newLinkedList = new Linkedlist();
newLinkedList.insertAtBeginning(15);
newLinkedList.insertAtBeginning(10);
newLinkedList.insertAtBeginning(5);
newLinkedList.removeAt(1);
console.log(newLinkedList);
