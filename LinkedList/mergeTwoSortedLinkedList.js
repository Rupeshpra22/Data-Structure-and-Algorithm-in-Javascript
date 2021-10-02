/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode();
    let sorted = dummy;
    
    while(l1!=null && l2!=null){
        if(l1.val<l2.val){
            sorted.next = new ListNode(l1.val);
            sorted = sorted.next;
            l1 = l1.next;
        }else{
            sorted.next = new ListNode(l2.val);
            sorted = sorted.next;
            l2 = l2.next;
        }
    }
    
    while(l1!=null){
        sorted.next = new ListNode(l1.val);
        sorted = sorted.next;
        l1 = l1.next;
    }
    
    while(l2!=null){
        sorted.next = new ListNode(l2.val);
        sorted = sorted.next;
        l2 = l2.next;
    }
    
    return dummy.next;
};