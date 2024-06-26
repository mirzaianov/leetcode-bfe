class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// const reverseList = (head: ListNode | null): ListNode | null => {
//   let curr: ListNode | null = head;
//   let prev: ListNode | null = null;

//   while (curr) {
//     const temp = curr.next;

//     curr.next = prev;
//     prev = curr;
//     curr = temp;
//   }

//   return prev;
// };

const reverseList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;

  const rev = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return rev;
};

export default reverseList;
