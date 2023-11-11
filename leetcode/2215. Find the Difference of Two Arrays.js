var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1),
    set2 = new Set(nums2);

  const arr1 = [],
    arr2 = [];

  for (let value1 of set1.values()) {
    if (!set2.has(value1)) arr1.push(value1);
  }

  for (let value2 of set2.values()) {
    if (!set1.has(value2)) arr2.push(value2);
  }

  return [arr1, arr2];
};
