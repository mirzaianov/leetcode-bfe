class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  if (!head || !head.next) return head;

  let tail: ListNode | null = head;
  let length = 1;

  while (tail.next) {
    tail = tail.next;
    length += 1;
  }

  tail.next = head;
  k = length - (k % length);

  for (let i = 0; i < k; i += 1) {
    tail = tail.next!;
    head = tail.next!;
  }

  tail.next = null;

  return head;
};

export default rotateRight;
