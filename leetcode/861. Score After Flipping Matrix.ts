const matrixScore = (grid: number[][]): number => {
  const matrix: number[][] = grid.map((row) => [...row]);
  const m: number = matrix.length;
  const n: number = matrix[0].length;

  for (let i = 0; i < m; i += 1) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < n; j += 1) {
        matrix[i][j] === 0 ? (matrix[i][j] = 1) : (matrix[i][j] = 0);
      }
    }
  }

  for (let i = 0; i < n; i += 1) {
    let ones = 0;

    for (let j = 0; j < m; j += 1) {
      ones += matrix[j][i];
    }

    if (ones < m / 2) {
      for (let j = 0; j < m; j += 1) {
        matrix[j][i] === 0 ? (matrix[j][i] = 1) : (matrix[j][i] = 0);
      }
    }
  }

  return matrix.reduce((acc: number, item: number[]) => {
    const s: string = item.reduce((res: string, val: number) => res + String(val), '');

    return acc + parseInt(s, 2);
  }, 0);
};

export default matrixScore;
