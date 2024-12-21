const targetIndices = (nums: number[], target: number): number[] => {
  nums.sort((a, b) => a - b);

  const res: number[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) res.push(i);
  }

  return res;
};

export default targetIndices;
