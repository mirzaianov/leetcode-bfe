// var twoOutOfThree = function (nums1, nums2, nums3) {
//   let accum = [];

//   for (let i = 0; i < nums1.length; i++) {
//     if (nums2.includes(nums1[i]) || nums3.includes(nums1[i])) {
//       if (!accum.includes(nums1[i])) {
//         accum.push(nums1[i]);
//       }
//     }
//   }

//   for (let i = 0; i < nums2.length; i++) {
//     if (nums1.includes(nums2[i]) || nums3.includes(nums2[i])) {
//       if (!accum.includes(nums2[i])) {
//         accum.push(nums2[i]);
//       }
//     }
//   }

//   for (let i = 0; i < nums3.length; i++) {
//     if (nums1.includes(nums3[i]) || nums2.includes(nums3[i])) {
//       if (!accum.includes(nums3[i])) {
//         accum.push(nums3[i]);
//       }
//     }
//   }

//   return accum;
// };

// #2

var twoOutOfThree = function (nums1, nums2, nums3) {
  const res = new Set();

  const set1 = new Set(nums1);
  for (const num of nums2) {
    if (set1.has(num)) {
      res.add(num);
    }
  }

  const set2 = new Set(nums2);
  for (const num of nums3) {
    if (set1.has(num) || set2.has(num)) {
      res.add(num);
    }
  }

  return Array.from(res);
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])); // [3, 2]
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2])); // [2, 3, 1]
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5])); // []
console.log(
  twoOutOfThree([2, 15, 10, 11, 14, 12, 14, 11, 9, 1], [8, 9, 13, 2, 11, 8], [13, 5, 15, 7, 12, 7, 8, 3, 13, 15]),
); // [8,13,2,15,11,12,9]
