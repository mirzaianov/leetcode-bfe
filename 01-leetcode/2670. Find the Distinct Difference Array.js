const distinctDifferenceArray = function (nums) {
  const n = nums.length;
  let set;

  const pref = new Array(n);
  set = new Set();

  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
    pref[i] = set.size;
  }

  const suf = new Array(n);
  set = new Set();

  for (let i = n - 1; i >= 0; i--) {
    suf[i] = set.size;
    set.add(nums[i]);
  }

  const res = new Array(n);

  for (let i = 0; i < n; i++) {
    res[i] = pref[i] - suf[i];
  }

  return res;
};

// console.log(distinctDifferenceArray([1, 2, 3, 4, 5])); // [-3,-1,1,3,5]
console.log(distinctDifferenceArray([3, 2, 3, 4, 2])); // [-2,-1,0,2,3]
