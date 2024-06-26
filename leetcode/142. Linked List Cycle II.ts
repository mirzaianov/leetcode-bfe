class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const detectCycle = (head: ListNode | null): ListNode | null => {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let hasCycle = false;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      hasCycle = true;
      slow = head;
      break;
    }
  }

  if (!hasCycle) {
    return null;
  }

  while (slow && fast && slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

export default detectCycle;
