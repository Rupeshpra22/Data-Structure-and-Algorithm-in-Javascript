class Node{
    constructor(value, prev=null, next=null){
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value : value,
            next: null,
            prev: null
        };
        this.size = 0;
    }


    insertAtBeginning(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }
}

let newDoublylinkedList = new DoublyLinkedList();
newDoublylinkedList.insertAtBeginning(10);
newDoublylinkedList.insertAtBeginning(5);
console.log(newDoublylinkedList)