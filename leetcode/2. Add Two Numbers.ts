class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const newNode: ListNode = new ListNode(0);
  let head = newNode;
  let carry = 0;

  while (l1 || l2) {
    const a: number = (l1 && l1.val) || 0;
    const b: number = (l2 && l2.val) || 0;
    const sum: number = a + b + carry;

    carry = Math.floor(sum / 10);
    head.next = new ListNode(sum % 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    head = head.next;
  }

  if (carry > 0) head.next = new ListNode(carry);

  return newNode.next;
};

export default addTwoNumbers;
