const countPairs = (nums: number[], target: number): number => {
  const len: number = nums.length;
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (nums[i] + nums[j] < target) count += 1;
    }
  }

  return count;
};

export default countPairs;
