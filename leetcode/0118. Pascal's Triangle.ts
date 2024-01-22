const generate = (numRows: number): number[][] => {
  const result: number[][] = [];

  for (let i = 0; i < numRows; i += 1) {
    result[i] = [];
    result[i][0] = 1;
    result[i][i] = 1;

    for (let j = 1; j < i; j += 1) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }

  return result;
};
