const transpose = (matrix: number[][]): number[][] => {
  const res: number[][] = [];

  for (let j = 0; j < matrix[0].length; j += 1) {
    const row: number[] = [];

    for (let i = 0; i < matrix.length; i += 1) {
      row.push(matrix[i][j]);
    }

    res.push(row);
  }

  return res;
};

export default transpose;
