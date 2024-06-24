const combinationSum = (candidates: number[], target: number): number[][] => {
  const res: number[][] = [];

  const dfs = (i: number, cur: number[], total: number): void => {
    if (total === target) {
      res.push([...cur]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    cur.push(candidates[i]);

    dfs(i, cur, total + candidates[i]);

    cur.pop();

    dfs(i + 1, cur, total);
  };

  dfs(0, [], 0);

  return res;
};

export default combinationSum;
