const createTargetArray = (nums: number[], index: number[]): number[] => {
  const target: number[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    target.splice(index[i], 0, nums[i]);
  }

  return target;
};

export default createTargetArray;
