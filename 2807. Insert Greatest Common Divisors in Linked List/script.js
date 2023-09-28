const insertGreatestCommonDivisors = function (head) {
  if (head && !head.next) return head;

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  let curr = head;
  let temp = curr.next;

  while (curr && temp) {
    const valCurr = curr.val;
    const valTemp = temp.val;

    const currDivisor = gcd(valCurr, valTemp);

    const newNode = new ListNode(currDivisor);

    newNode.next = temp;
    curr.next = newNode;

    temp = temp.next;
    curr = curr.next.next;
  }

  return head;
};
