var nextGreaterElement = function (nums1, nums2) {
  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      let startIndex = nums2.indexOf(nums1[i]);
      let num = nums2.slice(startIndex).find((item) => item > nums1[i]);

      res.push(num ? num : -1);
    } else {
      res.push(-1);
    }
  }

  return res;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
