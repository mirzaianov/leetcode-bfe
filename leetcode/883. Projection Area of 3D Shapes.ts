const projectionArea = (grid: number[][]): number => {
  const len: number = grid.length;
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    count += Math.max(...grid[i]);

    let max = -Infinity;

    for (let j = 0; j < len; j += 1) {
      if (grid[i][j] > 0) count += 1;

      max = Math.max(max, grid[j][i]);
    }

    count += max;
  }

  return count;
};

export default projectionArea;
