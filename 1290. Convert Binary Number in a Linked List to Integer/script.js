const getDecimalValue = function (head) {
  let string = '';

  while (head) {
    string += head.val;
    head = head.next;
  }

  return parseInt(string, 2);
};
