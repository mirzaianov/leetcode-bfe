class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new ListNode(5);
const node2 = new ListNode(2);
const node3 = new ListNode(13);
const node4 = new ListNode(3);
const node5 = new ListNode(8);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const removeNodes = function (head) {
  if (!head) return null;

  head.next = removeNodes(head.next);

  if (head.next && head.val < head.next.val) return head.next;

  return head;
};

console.log(removeNodes(node1)); // 13 -> 8
