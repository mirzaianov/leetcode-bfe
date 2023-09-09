const islandPerimeter = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (i > 0 && grid[i][j] === 1 && grid[i - 1][j] === 1) {
        count -= 1;
      }

      grid[i][j] === 1 ? (count += 4) : (count += 0);
    }
  }

  return count;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
); // 16
console.log(islandPerimeter([[1]])); // 4
console.log(islandPerimeter([[1, 0]])); // 4
