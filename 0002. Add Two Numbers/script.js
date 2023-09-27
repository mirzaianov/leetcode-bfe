class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node11 = new ListNode(2);
const node12 = new ListNode(4);
const node13 = new ListNode(3);

const node21 = new ListNode(5);
const node22 = new ListNode(6);
const node23 = new ListNode(4);

node11.next = node12;
node12.next = node13;

node21.next = node22;
node22.next = node23;

node11;
node21;

const addTwoNumbers = function (l1, l2) {
  const newNode = new ListNode(0);
  let head = newNode;
  let carry = 0;

  while (l1 || l2) {
    const a = l1 && l1.val;
    const b = l2 && l2.val;
    const sum = a + b + carry;

    carry = Math.floor(sum / 10);
    head.next = new ListNode(sum % 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    head = head.next;
  }

  if (carry > 0) head.next = new ListNode(carry);

  return newNode.next;
};

console.log(addTwoNumbers(node11, node21));
