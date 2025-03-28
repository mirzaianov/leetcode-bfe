const intersection = (nums: number[][]): number[] => {
  const set = new Set(nums[0]);

  for (let i = 1; i < nums.length; i += 1) {
    const currSet = new Set(nums[i]);

    for (const key of set.keys()) {
      if (!currSet.has(key)) set.delete(key);
    }
  }

  return [...set].sort((a, b) => a - b);
};

export default intersection;
