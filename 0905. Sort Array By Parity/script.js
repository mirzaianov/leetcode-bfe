var sortArrayByParity = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) res.push(nums[i]);
    else res.unshift(nums[i]);
  }

  return res;
};
