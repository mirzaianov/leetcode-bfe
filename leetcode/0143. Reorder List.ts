class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */

const reorderList = (head: ListNode | null): void => {
  // find middle
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (slow) {
    // reverse the 2nd half of the list
    let second = slow.next;
    let prev = null;

    slow.next = null;

    while (second) {
      const temp = second.next;

      second.next = prev;
      prev = second;
      second = temp;
    }

    second = prev;
    let first = head;

    // merge 2 halves
    while (first && second) {
      const temp1 = first.next;
      const temp2 = second.next;

      first.next = second;
      second.next = temp1;
      first = temp1;
      second = temp2;
    }
  }
};

export default reorderList;
