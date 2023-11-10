var sortArrayByParityII = function (nums) {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] % 2 !== 0) {
      for (let j = 1; j < nums.length; j += 2) {
        if (nums[j] % 2 === 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]];

          break;
        }
      }
    }
  }

  return nums;
};
