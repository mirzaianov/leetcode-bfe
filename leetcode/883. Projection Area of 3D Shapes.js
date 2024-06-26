// const projectionArea = function (grid) {
//   const len = grid.length;
//   let count = 0;

//   for (let i = 0; i < len; i += 1) {
//     count += Math.max(...grid[i]);

//     const col = [];

//     for (let j = 0; j < len; j += 1) {
//       if (grid[i][j] > 0) count += 1;

//       col.push(grid[j][i]);
//     }

//     count += Math.max(...col);
//   }

//   return count;
// };

const projectionArea = function (grid) {
  const len = grid.length;
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    count += Math.max(...grid[i]);

    let colMax = -Infinity;

    for (let j = 0; j < len; j += 1) {
      if (grid[i][j] > 0) count += 1;

      colMax = Math.max(colMax, grid[j][i]);
    }

    count += colMax;
  }

  return count;
};

console.log(
  projectionArea([
    [1, 2],
    [3, 4],
  ]),
); // 17
console.log(projectionArea([[2]])); // 5
console.log(
  projectionArea([
    [1, 0],
    [0, 2],
  ]),
); // 8
