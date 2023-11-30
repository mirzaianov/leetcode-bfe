const applyOperations = (nums) => {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      const current = nums.splice(i, 1);
      nums.push(current);
      i -= 1;
    }
  }

  return nums;
};
