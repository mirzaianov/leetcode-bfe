const swapNodes = function (head, k) {
  let A = head;

  for (let i = 1; i < k; i += 1) {
    A = A.next;
  }

  const K = A;
  A = A.next;

  let B = head;

  while (A) {
    A = A.next;
    B = B.next;
  }

  const temp = K.val;
  K.val = B.val;
  B.val = temp;

  return head;
};
