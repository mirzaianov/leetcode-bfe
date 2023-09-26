/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// const hasCycle = (head) => {
//   let fast = head;

//   while (fast && fast.next) {
//     head = head.next;
//     fast = fast.next.next;

//     if (head === fast) return true;
//   }

//   return false;
// };

// #2

const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};

// #3

// const hasCycle = (head) => {
//   if (!head) return false;

//   let slow = head;
//   let fast = head.next;

//   while (fast && fast.next) {
//     if (fast === slow) return true;

//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   return false;
// }
