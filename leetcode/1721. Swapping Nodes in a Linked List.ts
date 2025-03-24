class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const swapNodes = (head: ListNode | null, k: number): ListNode | null => {
  let first: ListNode | null = head;

  for (let i = 1; i < k; i += 1) {
    if (first && first.next) {
      first = first.next;
    }
  }

  const swap: ListNode | null = first;

  if (first) first = first.next;

  let second: ListNode | null = head;

  while (first && second) {
    first = first.next;
    second = second.next;
  }

  if (swap && second) {
    const temp: number = swap.val;

    swap.val = second.val;
    second.val = temp;
  }

  return head;
};

export default swapNodes;
