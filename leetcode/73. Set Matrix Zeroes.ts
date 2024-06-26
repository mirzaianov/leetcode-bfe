const findZeroes = (mat: number[][]): number[][] => {
  const res: number[][] = [];

  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[i].length; j += 1) {
      if (mat[i][j] === 0) res.push([i, j]);
    }
  }

  return res;
};

const writeZeroes = (matr: number[][], i: number, j: number): void => {
  for (let k = i; k >= 0; k -= 1) {
    matr[k][j] = 0;
  }

  for (let k = j; k < matr[0].length; k += 1) {
    matr[i][k] = 0;
  }

  for (let k = i; k < matr.length; k += 1) {
    matr[k][j] = 0;
  }

  for (let k = j; k >= 0; k -= 1) {
    matr[i][k] = 0;
  }
};

const setZeroes = (matrix: number[][]): void => {
  const zeroes: number[][] = findZeroes(matrix);

  for (const [row, col] of zeroes) {
    writeZeroes(matrix, row, col);
  }
};

export default setZeroes;
