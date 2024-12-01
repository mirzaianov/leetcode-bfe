const subsetXORSum = (nums: number[]): number => {
  const dfs = (i: number, total: number): number => {
    if (i === nums.length) return total;

    return dfs(i + 1, total ^ nums[i]) + dfs(i + 1, total);
  };

  return dfs(0, 0);
};

export default subsetXORSum;
