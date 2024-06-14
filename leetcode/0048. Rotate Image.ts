const rotate = (matrix: number[][]): void => {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i; j < matrix[i].length; j += 1) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i] = matrix[i].reverse();
  }
};

export default rotate;
