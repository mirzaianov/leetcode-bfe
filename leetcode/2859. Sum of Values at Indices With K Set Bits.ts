const countBits = (index: number): number => {
  let count = 0;

  while (index) {
    if (index & 1) count += 1;

    index >>= 1;
  }

  return count;
};

const sumIndicesWithKSetBits = (nums: number[], k: number): number => {
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (countBits(i) === k) count += nums[i];
  }

  return count;
};

export default sumIndicesWithKSetBits;
