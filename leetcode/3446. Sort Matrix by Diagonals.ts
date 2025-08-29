const sortMatrix = (grid: number[][]): number[][] => {
  const n: number = grid.length;

  for (let i = 2 - n; i < n; i += 1) {
    const d: number[] = new Array(n);
    let k = 0;

    for (let j = 0; j < n; j += 1) {
      if (grid[j][i + j] !== undefined) {
        d[k] = grid[j][i + j];
        k += 1;
      }
    }

    if (i > 0) {
      d.sort((a, b) => a - b);
    } else {
      d.sort((a, b) => b - a);
    }

    k = 0;

    for (let j = 0; j < n; j += 1) {
      if (grid[j][i + j] !== undefined) {
        grid[j][i + j] = d[k];
        k += 1;
      }
    }
  }

  return grid;
};

export default sortMatrix;
