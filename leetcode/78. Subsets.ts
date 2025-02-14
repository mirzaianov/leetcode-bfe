const subsets = (nums: number[]): number[][] => {
  const res: number[][] = [];
  const curr: number[] = [];

  const buildSubsets = (i: number): void => {
    if (i === nums.length) {
      res.push(curr.slice());
      return;
    }

    curr.push(nums[i]);
    buildSubsets(i + 1);

    curr.pop();
    buildSubsets(i + 1);
  };

  buildSubsets(0);

  return res;
};

export default subsets;
