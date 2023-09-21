class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const first = new ListNode(1);
const second = new ListNode(0);
const third = new ListNode(1);

first.next = second;
second.next = third;

// const getDecimalValue = function (head) {
//   let string = '';

//   while (head) {
//     string += head.val;
//     head = head.next;
//   }

//   return parseInt(string, 2);
// };

// #2

const getDecimalValue = function (head) {
  let res = head.val;
  let nextVal = head.next;

  while (nextVal) {
    res = res * 2 + nextVal.val;
    nextVal = nextVal.next;
  }

  return res;
};

console.log(getDecimalValue(first));
