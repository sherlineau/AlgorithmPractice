# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        # initialize empty array
        vals = []
        current_node = head
        # copies linked list into the empty array
        while current_node is not None:
            # adds val of current_node to new array vals
            vals.append(current_node.val)
            # sets current node to next node
            current_node = current_node.next
        # checks array is palindrome
        return vals == vals[::-1] 
        