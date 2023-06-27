var mergeArrays = function (nums1, nums2) {
  let res = [...nums1, ...nums2].sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < res.length - 1; i++) {
    if (res[i][0] === res[i + 1][0]) {
      res[i][1] += res[i + 1][1];
      res.splice(i + 1, 1);
    }
  }

  return res;
};
