class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const findMid = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (slow && slow.next && fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.next;
};

const reverseList = (head: ListNode | null): ListNode | null => {
  let curr: ListNode | null = head;
  let prev: ListNode | null = null;

  while (curr) {
    const temp: ListNode | null = curr.next;

    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

const pairSum = (head: ListNode | null): number => {
  const partialList = findMid(head);
  let reversedList = reverseList(partialList);
  let fullList: ListNode | null = head;
  let sum = 0;

  while (fullList && reversedList) {
    sum = Math.max(sum, reversedList.val + fullList.val);

    reversedList = reversedList.next;
    fullList = fullList.next;
  }

  return sum;
};

export default pairSum;
