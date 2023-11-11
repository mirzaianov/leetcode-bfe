const setZeroes = function (matrix) {
  const rowSet = new Set(),
    colSet = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rowSet.has(i) || colSet.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix; // TODO: remove in leetcode
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
// [[1, 0, 1],
//  [0, 0, 0],
//  [1, 0, 1]]
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
// [[0, 0, 0, 0],
//  [0, 4, 5, 0],
//  [0, 3, 1, 0]]
