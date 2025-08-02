class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeInBetween = (
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null,
): ListNode | null => {
  let list3: ListNode | null = null;
  let head1: ListNode | null = list1;

  for (let i = 0; i <= b; i += 1) {
    if (head1 && head1.next) {
      if (i === b) {
        list3 = head1.next;
        head1.next = null;
      }

      head1 = head1.next;
    }
  }

  let head2: ListNode | null = list2;

  if (head2) {
    while (head2.next) {
      head2 = head2.next;
    }

    head2.next = list3;
  }

  head1 = list1;

  for (let i = 0; i < a - 1; i += 1) {
    if (head1) {
      head1 = head1.next;
    }
  }

  if (head1) head1.next = list2;

  return list1;
};

export default mergeInBetween;
