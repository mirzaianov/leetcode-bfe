const onesMinusZeros = (grid: number[][]): number[][] => {
  const onesRows: number[] = [];

  for (let i = 0; i < grid.length; i += 1) {
    let rowOnes = 0;

    for (let j = 0; j < grid[0].length; j += 1) {
      const val: number = grid[i][j];

      if (val === 1) rowOnes += 1;
    }

    onesRows.push(rowOnes);
  }

  const zerosRows: number[] = [];

  for (let i = 0; i < grid.length; i += 1) {
    let rowZeros = 0;

    for (let j = 0; j < grid[0].length; j += 1) {
      const val: number = grid[i][j];

      if (val === 0) rowZeros += 1;
    }

    zerosRows.push(rowZeros);
  }

  const onesCols: number[] = [];

  for (let i = 0; i < grid[0].length; i += 1) {
    let colOnes = 0;

    for (let j = 0; j < grid.length; j += 1) {
      const val: number = grid[j][i];

      if (val === 1) colOnes += 1;
    }

    onesCols.push(colOnes);
  }

  const zerosCols: number[] = [];

  for (let i = 0; i < grid[0].length; i += 1) {
    let colZeros = 0;

    for (let j = 0; j < grid.length; j += 1) {
      const val: number = grid[j][i];

      if (val === 0) colZeros += 1;
    }

    zerosCols.push(colZeros);
  }

  const res: number[][] = [];

  for (let i = 0; i < grid.length; i += 1) {
    const diffRow: number[] = [];

    for (let j = 0; j < grid[0].length; j += 1) {
      const diffVal: number = onesRows[i] + onesCols[j] - zerosRows[i] - zerosCols[j];

      diffRow.push(diffVal);
    }

    res.push(diffRow);
  }

  return res;
};

export default onesMinusZeros;
