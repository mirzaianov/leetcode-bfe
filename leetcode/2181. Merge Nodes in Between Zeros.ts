class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeNodes = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  let curr: ListNode | null = head;

  while (curr && curr.next) {
    while (curr.next && curr.next.val !== 0) {
      curr.val += curr.next.val;
      curr.next = curr.next.next;
    }

    curr = curr.next;
  }

  let curr2: ListNode | null = head;

  while (curr2 && curr2.next) {
    if (curr2.next.val === 0) curr2.next = null;

    curr2 = curr2.next;
  }

  return head;
};

export default mergeNodes;
