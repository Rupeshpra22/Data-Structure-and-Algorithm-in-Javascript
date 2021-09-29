class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

let arr = [];

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    InsertAtBeginning(value){
        let newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    }

    convertLinkedListToArray(){
        let curr = this.head;
        while(curr!=null){
            arr.push(curr.value);
            curr = curr.next;
        }
        return arr;
    }
}



let newLinkedlist = new LinkedList();
newLinkedlist.InsertAtBeginning(10);
newLinkedlist.InsertAtBeginning(5);
newLinkedlist.InsertAtBeginning(2);
console.log(newLinkedlist.convertLinkedListToArray());
console.log(newLinkedlist)
