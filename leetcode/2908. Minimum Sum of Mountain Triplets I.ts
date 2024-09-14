const minimumSum = (nums: number[]): number => {
  const n: number = nums.length;

  const dpLeft: number[] = new Array(n);

  dpLeft[0] = nums[0];

  for (let i = 1; i < n; i += 1) {
    dpLeft[i] = Math.min(nums[i], dpLeft[i - 1]);
  }

  const dpRight: number[] = new Array(n);

  dpRight[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i -= 1) {
    dpRight[i] = Math.min(nums[i], dpRight[i + 1]);
  }

  let res: number = Infinity;

  for (let i = 1; i < n - 1; i += 1) {
    if (nums[i] > dpLeft[i - 1] && nums[i] > dpRight[i + 1]) {
      const sum: number = dpLeft[i - 1] + nums[i] + dpRight[i + 1];

      res = Math.min(res, sum);
    }
  }

  return res === Infinity ? -1 : res;
};

export default minimumSum;
