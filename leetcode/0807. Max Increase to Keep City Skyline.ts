const maxIncreaseKeepingSkyline = (grid: number[][]): number => {
  const n: number = grid.length;
  const row: number[] = new Array(n).fill(0);
  const col: number[] = new Array(n).fill(0);

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      row[i] = Math.max(row[i], grid[i][j]);
      col[j] = Math.max(col[j], grid[i][j]);
    }
  }

  let ans = 0;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      ans += Math.min(row[i], col[j]) - grid[i][j];
    }
  }

  return ans;
};
