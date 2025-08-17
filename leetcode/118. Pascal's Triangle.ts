const generate = (numRows: number): number[][] => {
  const res: number[][] = [];

  for (let i = 0; i < numRows; i += 1) {
    res[i] = [];
    res[i][0] = 1;
    res[i][i] = 1;

    for (let j = 1; j < i; j += 1) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }

  return res;
};

export default generate;
