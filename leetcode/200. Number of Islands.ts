const bfs = (row: number, col: number, matrix: string[][]): void => {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[row].length ||
    matrix[row][col] === '0'
  ) {
    return;
  }

  matrix[row][col] = '0';

  bfs(row, col + 1, matrix);
  bfs(row, col - 1, matrix);
  bfs(row + 1, col, matrix);
  bfs(row - 1, col, matrix);
};

const numIslands = (grid: string[][]): number => {
  let count = 0;

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      if (grid[row][col] === '1') {
        count += 1;
        bfs(row, col, grid);
      }
    }
  }

  return count;
};

export default numIslands;
