class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseNodes = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    const temp: ListNode | null = curr.next;

    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

const removeLesserNodes = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  let curr: ListNode | null = head;

  while (curr && curr.next) {
    if (curr.next.val < curr.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};

const removeNodes = (head: ListNode | null): ListNode | null =>
  reverseNodes(removeLesserNodes(reverseNodes(head)));

export default removeNodes;
