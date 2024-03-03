const findTargetSumWays = (nums: number[], target: number): number => {
  const map = new Map<string, number>();

  const dfs = (i: number, total: number): number => {
    const id: string = `${i}-${total}`;

    if (map.has(id)) return map.get(id)!;

    if (i === nums.length) {
      if (total === target) return 1;

      return 0;
    }

    map.set(id, dfs(i + 1, total + nums[i]) + dfs(i + 1, total - nums[i]));

    return map.get(id)!;
  };

  return dfs(0, 0);
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5
console.log(findTargetSumWays([1], 1)); // 1
