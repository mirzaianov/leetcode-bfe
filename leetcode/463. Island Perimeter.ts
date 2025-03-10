const islandPerimeter = (grid: number[][]): number => {
  let count = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === 1) count += 4;
      if (i > 0 && grid[i][j] === 1 && grid[i - 1][j] === 1) count -= 2;
      if (j > 0 && grid[i][j] === 1 && grid[i][j - 1] === 1) count -= 2;
    }
  }

  return count;
};

export default islandPerimeter;
