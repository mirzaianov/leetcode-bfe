const buildArray = (nums: number[]): number[] => {
  const n = nums.length;

  for (let i = 0; i < n; i += 1) {
    nums[i] += n * (nums[nums[i]] % n);
  }

  for (let i = 0; i < n; i += 1) {
    nums[i] = Math.floor(nums[i] / n);
  }

  return nums;
};

export default buildArray;
