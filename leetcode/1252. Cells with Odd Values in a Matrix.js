var oddCells = function (m, n, indices) {
  const matrix = [];

  for (let i = 0; i < m; i++) {
    matrix.push(new Array(n).fill(0));
  }

  let res = 0;

  for (let i = 0; i < indices.length; i++) {
    const [r, c] = indices[i];

    for (let j = 0; j < n; j++) {
      matrix[r][j]++;

      if (matrix[r][j] % 2) res++;
      else res--;
    }

    for (let k = 0; k < m; k++) {
      matrix[k][c]++;

      if (matrix[k][c] % 2) res++;
      else res--;
    }
  }

  return res;
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ]),
); // 6

// console.log(
//   oddCells(2, 2, [
//     [1, 1],
//     [0, 0],
//   ]),
// ); // 0
