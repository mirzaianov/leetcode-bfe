const minimumOperations = (grid: number[][]): number => {
  const matrix: number[][] = grid.map((row) => [...row]);
  let count = 0;

  for (let j = 0; j < matrix[0].length; j += 1) {
    for (let i = 1; i < matrix.length; i += 1) {
      const diff: number = matrix[i][j] - matrix[i - 1][j];

      if (diff <= 0) {
        const add: number = -diff + 1;

        matrix[i][j] += add;
        count += add;
      }
    }
  }

  return count;
};

export default minimumOperations;
