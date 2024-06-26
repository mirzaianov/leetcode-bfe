class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const swapPairs = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;

  const temp = head.next;

  head.next = swapPairs(temp.next);
  temp.next = head;

  return temp;
};

export default swapPairs;
