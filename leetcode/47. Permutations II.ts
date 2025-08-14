const permuteUnique = (nums: number[]): number[][] => {
  const res: number[][] = [];

  const backtrack = (i: number): void => {
    if (i === nums.length) {
      res.push([...nums]);

      return;
    }

    const seen = new Set<number>();

    for (let j = i; j < nums.length; j += 1) {
      if (seen.has(nums[j])) continue;

      seen.add(nums[j]);

      [nums[i], nums[j]] = [nums[j], nums[i]];

      backtrack(i + 1);

      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  backtrack(0);

  return res;
};

export default permuteUnique;
