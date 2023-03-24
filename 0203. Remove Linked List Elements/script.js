class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new ListNode('1');
const node2 = new ListNode('2');
const node3 = new ListNode('3');
const node4 = new ListNode('4');
const node5 = new ListNode('5');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// const removeElements = function (head, val) {
//     if (!head) return head;

//     while (head && head.val === val) {
//         head = head.next;
//     }

//     let curr = head;

//     while (curr && curr.next) {
//         if (curr.next.val === val) {
//             curr.next = curr.next.next;
//         } else {
//             curr = curr.next;
//         }
//     }

//     return head;
// };

const removeElements = function (head, val) {
  let result = new ListNode(0);
  result.next = head;

  let cur = result;

  while (cur.next !== null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return result.next;
};

const printLinkedList = (head) => {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

// console.log(printLinkedList(node1));

removeElements(node1, '3');

console.log(printLinkedList(node1));
