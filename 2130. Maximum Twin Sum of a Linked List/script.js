const pairSum = function (head) {
  if (!head.next.next) return head.val + head.next.val;

  const mid = (node) => {
    let slow = node;
    let fast = node;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  };

  const rev = (node) => {
    let curr = node;
    let prev = null;

    while (curr) {
      const temp = curr.next;

      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    return prev;
  };

  const middle = mid(head);
  let reversed = rev(middle);

  let max = -Infinity;

  while (reversed) {
    max = Math.max(max, reversed.val + head.val);

    reversed = reversed.next;
    head = head.next;
  }

  return max;
};
