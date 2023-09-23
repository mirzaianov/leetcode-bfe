// const mergeTwoLists = function (list1, list2) {
//   let merged = new ListNode(0);
//   let result = merged;

//   while (list1 && list2) {
//     if (list1.val < list2.val) {
//       merged.next = new ListNode(list1.val);
//       list1 = list1.next;
//     } else {
//       merged.next = new ListNode(list2.val);
//       list2 = list2.next;
//     }

//     merged = merged.next;
//   }

//   while (list1) {
//     merged.next = new ListNode(list1.val);
//     list1 = list1.next;
//     merged = merged.next;
//   }

//   while (list2) {
//     merged.next = new ListNode(list2.val);
//     list2 = list2.next;
//     merged = merged.next;
//   }

//   return result.next;
// };

// #2

const mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
