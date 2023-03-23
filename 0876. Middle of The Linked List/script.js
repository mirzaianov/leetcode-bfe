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

// const middleNode = function (head) {
//     const divider = head.length / 2;
//     if (divider % 1 !== 0) {
//         const adj = divider - 0.5;
//         return head.slice(adj);
//     } else {
//         return head.slice(divider);
//     }
// };

// var middleNode = function (head) {
//     let slow = head;
//     let fast = head;

//     while (fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//     }
//     return slow;
// };

// #2

const middleNode = function (head) {
  let cur = head;
  let count = 0;

  while (cur !== null) {
    count++;
    cur = cur.next;
  }

  const mid = Math.floor(count / 2);

  for (let i = 0; i < mid; i++) {
    head = head.next;
  }

  return head;
};
