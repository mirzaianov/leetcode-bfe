class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new Node('1');
const node2 = new Node('2');
const node3 = new Node('3');
const node4 = new Node('4');
const node5 = new Node('5');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const printLinkedList = (head) => {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

// printLinkedList(node1);

const printLinkedListRecursive = (head) => {
  if (head === null) return;

  console.log(head.val);

  printLinkedListRecursive(head.next);
};

// printLinkedListRecursive(node1);

// const reverseList = function (head) {
//     let current = head;
//     let previous = null;
//     let next;

//     while (current !== null) {
//         next = current.next;
//         current.next = previous;
//         previous = current;
//         current = next;
//     }

//     return previous;
// };

// const reverseList = function (head) {
//     let prev = null;
//     let current = head;

//     while (current !== null) {
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }

//     return prev;
// };

// #3

// const reverseList = function (head) {
//   let cur = head;
//   let prev = null;

//   while (cur !== null) {
//     let temp = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = temp;
//   }

//   return prev;
// };

// #2

const reverseList = function (head) {
  let curr = head;
  let prev = null;

  while (curr) {
    const temp = curr.next;

    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

const newList = reverseList(node1);
const newResult = printLinkedListRecursive(newList);

console.log(newResult); // [5,4,3,2,1]
// console.log(reverseList([1, 2])); // [2,1]
// console.log(reverseList([])); // []
