const getMaximumXor = (nums: number[], maximumBit: number): number[] => {
  let xor: number = (1 << maximumBit) - 1;

  for (let i = 0; i < nums.length; i += 1) {
    xor ^= nums[i];
    nums[i] = xor;
  }

  return nums.reverse();
};

export default getMaximumXor;
