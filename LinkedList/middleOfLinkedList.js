let middleOfLinkedlist = (head) =>{
    let slow = head;
    let fast = head;
    while(fast.next!=null && fast!=null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}