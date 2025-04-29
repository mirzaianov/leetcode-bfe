class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const oddEvenList = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  const evenHead: ListNode | null = head.next;

  let odd: ListNode = head;
  let even: ListNode | null = head.next;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

export default oddEvenList;
