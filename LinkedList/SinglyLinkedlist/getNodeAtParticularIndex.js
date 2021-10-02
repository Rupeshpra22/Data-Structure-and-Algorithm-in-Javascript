class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next
    }
}

class Linkedlist {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtBeginning(value){
        let newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    } 

    getAtIndex(index){
        let curr = this.head;
        let count = 0;
        while(curr){
            if(index === count){
                return curr.value;
            }
            curr = curr.next;
            count++;
        }
        return -1;
    }
}

let newLinkedList = new Linkedlist();
newLinkedList.insertAtBeginning(15);
newLinkedList.insertAtBeginning(10);
newLinkedList.insertAtBeginning(5);
console.log(newLinkedList.getAtIndex(2));
console.log(newLinkedList);