// const isPalindrome = function (head) {
//   if (!head) return false;

//   let mid = middleNote(head);
//   let rev = reverseList(mid);

//   while (rev !== null) {
//     if (head.val !== rev.val) return false;

//     rev = rev.next;
//     head = head.next;
//   }

//   return true;

//   function middleNote(head) {
//     let slow = head;
//     let fast = head;

//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }

//     return slow;
//   }

//   function reverseList(head) {
//     let cur = head;
//     let prev = null;

//     while (cur !== null) {
//       const temp = cur.next;
//       cur.next = prev;
//       prev = cur;
//       cur = temp;
//     }

//     return prev;
//   }
// };

// #2

const isPalindrome = function (head) {
  if (!head) return false;

  const middleNote = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  };

  const reverseList = (head) => {
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

  let mid = middleNote(head);
  let rev = reverseList(mid);

  while (rev) {
    if (head.val !== rev.val) return false;

    rev = rev.next;
    head = head.next;
  }

  return true;
};
