// const node1 = {data:10};

// const node2 = {data:20};

// //Referencing node1 to node2
// node1.next = node2;
// console.log(node1)

//Creating Node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//Creating LinkedList
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert At Beginning
    InsertAtBeginning(data) {
        //Suppose if initially there is some node, so we are basically creating a new node and making that particluar new
        //node as head as we are inserting at the beginning and the next of inserted node at the beggining will 
        //points to the previous head and that is why new Node(data, this.head);
        this.head = new Node(data, this.head);
        this.size++;
    }


    //Insert At End
    InsertAtEnd(data) {
        let node = new Node(data);
        if (this.head == null) {
            this.head = node;
        }
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = node;
        this.size++;
    }


    //Insert at Index
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let curr, prev;
        let node = new Node(data);
        let count = 0;
        curr = this.head;
        while (count < index) {
            prev = curr;
            count++;
            curr = curr.next;
        }

        prev.next = node;
        node.next = curr;
        this.size++;
    }


    //getAtIndex
    getAt(index) {
        let curr = this.head;
        let count = 0;

        while (curr) {
            if (index == count) {
                console.log(curr.data);
            }
            count++;
            curr = curr.next;
        }
        return -1;
    }

    //removeAtIndex
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let curr = this.head;
        let prev;
        let count = 0;
        if (index === 0) {
            this.head = curr.next;
        }

        while (count < index) {
            prev = curr;
            count++;
            curr = curr.next;
        }
        prev.next = curr.next;
        this.size--;
    }

    //Traverse the LinkedList
    PrintLinkedList() {
        let current = this.head;
        while (current != null) {
            console.log(current.data)
            current = current.next;
        }
    }

    //Clear LinkedList
    clearList() {
        this.head = null;
        this.size = 0;
    }

}

const linkedlist = new LinkedList();
linkedlist.InsertAtBeginning(100);
linkedlist.InsertAtBeginning(200);
linkedlist.InsertAtBeginning(300);
linkedlist.InsertAtEnd(400);
linkedlist.insertAt(250, 2);
linkedlist.PrintLinkedList();
linkedlist.getAt(2);
linkedlist.removeAt(3);
console.log(linkedlist)