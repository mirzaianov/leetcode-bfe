const swapNodes = function (head, k) {
  let first = head;

  for (let i = 1; i < k; i += 1) {
    first = first.next;
  }

  const swap = first;
  first = first.next;

  let second = head;

  while (first) {
    first = first.next;
    second = second.next;
  }

  const temp = swap.val;
  swap.val = second.val;
  second.val = temp;

  return head;
};
