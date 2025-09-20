const countSquares = (matrix: number[][]): number => {
  const m: number = matrix.length;
  const n: number = matrix[0].length;
  let count = 0;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (matrix[i][j] === 1 && i > 0 && j > 0) {
        matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;
      }

      count += matrix[i][j];
    }
  }

  return count;
};

export default countSquares;
