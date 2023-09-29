const mergeNodes = function (head) {
  let curr = head;

  while (curr && curr.next) {
    while (curr.next.val !== 0) {
      curr.val += curr.next.val;
      curr.next = curr.next.next;
    }

    curr = curr.next;
  }

  let curr2 = head;

  while (curr2) {
    if (curr2.next.val === 0) curr2.next = null;

    curr2 = curr2.next;
  }

  return head;
};
