const countQuadruplets = (nums: number[]): number => {
  const n: number = nums.length;
  let count = 0;

  for (let i = 0; i < n - 3; i += 1) {
    for (let j = i + 1; j < n - 2; j += 1) {
      for (let k = j + 1; k < n - 1; k += 1) {
        for (let m = k + 1; m < n; m += 1) {
          if (nums[i] + nums[j] + nums[k] === nums[m]) {
            count += 1;
          }
        }
      }
    }
  }

  return count;
};

export default countQuadruplets;
