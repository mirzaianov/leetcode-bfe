const largestLocal = (grid: number[][]): number[][] => {
  const res: number[][] = [];

  for (let i = 0; i < grid.length - 2; i += 1) {
    const sub: number[] = [];

    for (let j = 0; j < grid[0].length - 2; j += 1) {
      const max = Math.max(
        grid[i][j],
        grid[i + 1][j],
        grid[i + 2][j],
        grid[i][j + 1],
        grid[i + 1][j + 1],
        grid[i + 2][j + 1],
        grid[i][j + 2],
        grid[i + 1][j + 2],
        grid[i + 2][j + 2],
      );

      sub.push(max);
    }

    res.push(sub);
  }

  return res;
};

export default largestLocal;
