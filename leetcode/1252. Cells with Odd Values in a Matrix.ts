const oddCells = (m: number, n: number, indices: number[][]): number => {
  const matrix: number[][] = [];

  for (let i = 0; i < m; i += 1) {
    matrix.push(new Array(n).fill(0));
  }

  let count = 0;

  for (let i = 0; i < indices.length; i += 1) {
    const [r, c] = indices[i];

    for (let j = 0; j < n; j += 1) {
      matrix[r][j] += 1;

      if (matrix[r][j] % 2) count += 1;
      else count -= 1;
    }

    for (let k = 0; k < m; k += 1) {
      matrix[k][c] += 1;

      if (matrix[k][c] % 2) count += 1;
      else count -= 1;
    }
  }

  return count;
};

export default oddCells;
