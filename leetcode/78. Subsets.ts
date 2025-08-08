const subsets = (nums: number[]): number[][] => {
  const res: number[][] = [];
  const curr: number[] = [];

  const backtrack = (i: number): void => {
    if (nums.length === i) {
      res.push([...curr]);
      return;
    }

    curr.push(nums[i]);
    backtrack(i + 1);

    curr.pop();
    backtrack(i + 1);
  };

  backtrack(0);

  return res;
};

export default subsets;
