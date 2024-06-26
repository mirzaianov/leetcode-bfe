class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const findMiddleNode = (node: ListNode | null): ListNode | null => {
  let slow = node;
  let fast = node;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const reverseList = (node: ListNode | null): ListNode | null => {
  if (!node || !node.next) return node;

  const rev = reverseList(node.next);

  node.next.next = node;
  node.next = null;

  return rev;
};

const isPalindrome = (head: ListNode | null): boolean => {
  if (!head) return false;

  const mid = findMiddleNode(head);
  let rev = reverseList(mid);

  while (head && rev) {
    if (head.val !== rev.val) return false;

    rev = rev.next;
    head = head.next;
  }

  return true;
};

export default isPalindrome;
