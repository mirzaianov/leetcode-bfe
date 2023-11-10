const isToeplitzMatrix = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
    }
  }

  return true;
};

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ]),
); // true

console.log(
  isToeplitzMatrix([
    [1, 2],
    [2, 2],
  ]),
); // false

console.log(
  isToeplitzMatrix([
    [36, 86, 7, 94, 71, 59, 10],
    [19, 0, 86, 7, 94, 71, 59],
  ]),
); // false

console.log(
  isToeplitzMatrix([
    [36, 59, 71, 15, 26, 82, 87],
    [56, 36, 59, 71, 15, 26, 82],
    [15, 0, 36, 59, 71, 15, 26],
  ]),
); // false
