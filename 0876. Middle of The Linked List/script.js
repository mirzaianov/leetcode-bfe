'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const head = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const middleNode = function (head) {
    const divider = head.length / 2;
    if (divider % 1 !== 0) {
        const adj = divider - 0.5;
        return head.slice(adj);
    } else {
        return head.slice(divider);
    }
};

// middleNode(head);
console.log(middleNode(head));

// var middleNode = function (head) {
//     let slow = head;
//     let fast = head;

//     while (fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//     }
//     return slow;
// };
