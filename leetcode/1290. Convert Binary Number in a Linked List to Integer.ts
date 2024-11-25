class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const getDecimalValue = (head: ListNode | null): number => {
  const arr: string[] = [];

  while (head) {
    arr.push(String(head.val));
    head = head.next;
  }

  return parseInt(arr.join(''), 2);
};

export default getDecimalValue;
