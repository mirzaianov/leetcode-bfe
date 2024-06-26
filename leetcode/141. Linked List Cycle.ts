class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const hasCycle = (head: ListNode | null): boolean => {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};

export default hasCycle;
