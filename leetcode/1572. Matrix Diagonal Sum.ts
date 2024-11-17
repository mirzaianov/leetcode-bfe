const diagonalSum = (mat: number[][]): number => {
  let sum = 0;
  let i = 0;
  let j: number = mat[0].length - 1;

  while (i < mat.length) {
    if (i === j) {
      sum += mat[i][j];
    } else {
      sum += mat[i][i];
      sum += mat[i][j];
    }

    i += 1;
    j -= 1;
  }

  return sum;
};

export default diagonalSum;
