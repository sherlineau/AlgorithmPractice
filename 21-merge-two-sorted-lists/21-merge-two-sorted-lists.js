/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
//     create a new list to add our nodes too
    let output = new ListNode()
    let head = output
    
    while (list1 !== null && list2 !== null)
        {
//             if list1 is less than list2 node add it to output
            if (list1.val < list2.val)
                {
                    output.next = new ListNode(list1.val)
                    list1 = list1.next
                }
//             if list2 is less than list1 add it to output
            else {
                output.next = new ListNode(list2.val)
                list2 = list2.next
            }
            output = output.next
        }
    
    if (list1 !== null)
        output.next = list1
    if (list2 !== null)
        output.next = list2
    
    return head.next
};