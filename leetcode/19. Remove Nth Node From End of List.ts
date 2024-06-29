class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
  let slow = head;
  let fast = head;
  let i = 0;

  while (i < n && fast) {
    fast = fast.next;
    i += 1;
  }

  if (!fast && slow) return slow.next;

  while (slow && fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  if (slow && slow.next) {
    slow.next = slow.next.next;
  }

  return head;
};

export default removeNthFromEnd;
