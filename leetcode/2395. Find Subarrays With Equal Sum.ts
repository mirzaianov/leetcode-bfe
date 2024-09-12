const findSubarrays = (nums: number[]): boolean => {
  const set = new Set<number>();

  for (let i = 0; i < nums.length - 1; i += 1) {
    const sum: number = nums[i] + nums[i + 1];

    if (set.has(sum)) return true;

    set.add(sum);
  }

  return false;
};

export default findSubarrays;
