class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const deleteNode = (node: ListNode | null): void => {
  if (!node || !node.next) return;

  node.val = node.next.val;
  node.next = node.next.next;
};

export default deleteNode;
