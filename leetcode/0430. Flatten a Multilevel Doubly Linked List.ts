class Node {
  val: number;

  prev: Node | null;

  next: Node | null;

  child: Node | null;

  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

const flatten = (head: Node | null, next: Node | null = null): Node | null => {
  if (!head) return head;

  let current: Node | null = head;

  while (current) {
    if (current.child) {
      current.next = flatten(current.child, current.next)!;
      current.next.prev = current;
      current.child = null;
    }

    if (!current.next && next) {
      current.next = next;
      next.prev = current;
      break;
    } else {
      current = current.next;
    }
  }

  return head;
};

export default flatten;
