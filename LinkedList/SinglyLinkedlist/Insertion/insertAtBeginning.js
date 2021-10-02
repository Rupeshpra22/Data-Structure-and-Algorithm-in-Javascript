class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtBeginning(value){
        let newNode = new Node(value, this.head)
        this.head = newNode;
        this.size++;
    }
}

let newLinkedList = new LinkedList();
newLinkedList.insertAtBeginning(10);
newLinkedList.insertAtBeginning(5);
console.log(newLinkedList)