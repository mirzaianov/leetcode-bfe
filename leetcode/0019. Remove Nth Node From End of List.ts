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

  for (let i = 0; i < n; i += 1) {
    if (fast) {
      fast = fast.next;
    } else {
      throw new Error('n is greater than the length of the list');
    }
  }

  if (!fast) {
    if (head) {
      return head.next;
    }

    throw new Error('Head is null');
  }

  while (fast.next) {
    fast = fast.next;

    if (slow) {
      slow = slow.next;
    } else {
      throw new Error('Slow is null');
    }
  }

  if (slow && slow.next) {
    slow.next = slow.next.next;
  } else {
    throw new Error('Slow or Slow.next is null');
  }

  return head;
};

export default removeNthFromEnd;
