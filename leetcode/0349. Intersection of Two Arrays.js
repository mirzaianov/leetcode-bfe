var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  let res = [];

  for (let item of set1) {
    if (set2.has(item)) res.push(item);
  }

  return res;
};
