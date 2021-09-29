// List 1: 1→3→4→7
// List 2: 6→2→5
// Result: 1→3→4→7→6→2→5

function appendLists (list1, list2) {
    let curr = list1;
    while(curr.next!=null){
        curr = curr.next;
    }
    curr.next = list2;
    return list1;
}