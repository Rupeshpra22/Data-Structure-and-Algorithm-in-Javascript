class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }


    insertAtTheBeginning(value){
        this.head = new Node(value, this.head);
        this.size++;
    }

    removeOccurence(key){
        while (this.head != null && this.head.value == key) {
           this.head = this.head.next;
        }

        let curr = this.head;
		let prev = this.head;
		while(curr!=null){
			if(curr.value == key){
				prev.next = curr.next;
                curr = curr.next;
                this.size--;
			}else{
			prev = curr;
			curr = curr.next;
            }
		}
    }
}

let newLinkedList = new LinkedList();
let key = 2;
newLinkedList.insertAtTheBeginning(5);
newLinkedList.insertAtTheBeginning(2);
newLinkedList.insertAtTheBeginning(3);
newLinkedList.insertAtTheBeginning(2);
newLinkedList.insertAtTheBeginning(1);
newLinkedList.insertAtTheBeginning(6);
newLinkedList.removeOccurence(key);
console.log(newLinkedList);