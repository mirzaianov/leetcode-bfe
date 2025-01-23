class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const gcd = (a: number, b: number): number => (b > 0 ? gcd(b, a % b) : a);

const insertGreatestCommonDivisors = (head: ListNode | null): ListNode | null => {
  if (head && !head.next) return head;

  let currNode: ListNode | null = head;
  let nextNode: ListNode | null = head!.next;

  while (currNode && nextNode) {
    const newVal: number = gcd(currNode.val, nextNode.val);
    const newNode: ListNode | null = new ListNode(newVal);

    newNode.next = nextNode;
    currNode.next = newNode;

    currNode = nextNode;
    nextNode = nextNode.next;
  }

  return head;
};

export default insertGreatestCommonDivisors;
