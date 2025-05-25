const countSubarrays = (nums: number[]): number => {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i += 1) {
    if (nums[i] + nums[i + 2] === nums[i + 1] / 2) count += 1;
  }

  return count;
};

export default countSubarrays;
