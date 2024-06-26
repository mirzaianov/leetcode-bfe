class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const removeElements = (head: ListNode | null, val: number): ListNode | null => {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else prev = curr;

    curr = curr.next;
  }

  return dummy.next;
};

export default removeElements;
