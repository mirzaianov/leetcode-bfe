const zigzagTraversal = (grid: number[][]): number[] => {
  const n: number = grid.length;
  const m: number = grid[0].length;
  const res: number[] = [];

  for (let i = 0; i < n; i += 1) {
    if (i % 2 === 0) {
      for (let j = 0; j < m; j += 2) {
        res.push(grid[i][j]);
      }
    } else {
      if (m % 2 === 0) {
        for (let j = m - 1; j >= 0; j -= 2) {
          res.push(grid[i][j]);
        }
      } else {
        for (let j = m - 2; j >= 0; j -= 2) {
          res.push(grid[i][j]);
        }
      }
    }
  }

  return res;
};

export default zigzagTraversal;
