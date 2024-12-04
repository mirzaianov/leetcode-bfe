const countPairs = (nums: number[], k: number): number => {
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] === nums[j] && (i * j) % k === 0) count += 1;
    }
  }

  return count;
};

export default countPairs;
