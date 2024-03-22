// Definition for singly-linked list.
class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const insertionSortList = (head: ListNode | null): ListNode | null => {
  const dummy: ListNode = new ListNode();
  let prev: ListNode = dummy;

  while (head !== null) {
    const next = head.next;

    if (prev.val >= head.val) {
      prev = dummy;
    }

    while (prev.next !== null && prev.next.val < head.val) {
      prev = prev.next;
    }

    head.next = prev.next;
    prev.next = head;
    head = next;
  }

  return dummy.next;
};
