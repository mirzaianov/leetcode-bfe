const largestLocal = function (grid) {
  // declare (n-2 x n-2) matrix
  const matrix = new Array(grid.length - 2).fill(0).map(() => new Array(grid[0].length - 2).fill(0));
  // console.log(matrix);

  for (let i = 0; i < grid[i].length - 2; i++) {
    for (let j = 0; j < grid.length - 2; j++) {
      //find the max in each 3x3 martix
      matrix[i][j] = Math.max(
        grid[i][j],
        grid[i][j + 1],
        grid[i][j + 2],
        grid[i + 1][j],
        grid[i + 1][j + 1],
        grid[i + 1][j + 2],
        grid[i + 2][j],
        grid[i + 2][j + 1],
        grid[i + 2][j + 2],
      );
    }
  }

  return matrix;
};

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ]),
); // [[9, 9], [8, 6]]
console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ]),
); // [[2, 2, 2], [2, 2, 2], [2, 2, 2]]
console.log(
  largestLocal([
    [7, 1, 0, 2, 5, 9],
    [6, 1, 4, 3, 7, 1],
    [3, 5, 2, 3, 0, 6],
    [2, 7, 4, 9, 8, 6],
    [3, 1, 0, 5, 5, 6],
    [4, 9, 6, 7, 8, 2],
  ]),
); // [[7, 5, 7, 9], [7, 9, 9, 9], [7, 9, 9, 9], [9, 9, 9, 9]]
