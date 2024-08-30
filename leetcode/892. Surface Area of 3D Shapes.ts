const surfaceArea = (grid: number[][]): number => {
  let area = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      const cell: number = grid[i][j];

      if (!cell) continue;

      area += 4 * cell + 2;

      if (grid[i - 1]) area -= Math.min(cell, grid[i - 1][j]);
      if (grid[i][j + 1]) area -= Math.min(cell, grid[i][j + 1]);
      if (grid[i + 1]) area -= Math.min(cell, grid[i + 1][j]);
      if (grid[i][j - 1]) area -= Math.min(cell, grid[i][j - 1]);
    }
  }

  return area;
};

export default surfaceArea;
