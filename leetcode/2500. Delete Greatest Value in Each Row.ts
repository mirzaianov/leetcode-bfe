const deleteGreatestValue = (grid: number[][]): number => {
  for (const row of grid) {
    row.sort((a, b) => b - a);
  }

  let sum = 0;

  for (let i = 0; i < grid[0].length; i += 1) {
    let max = grid[0][i];

    for (let j = 0; j < grid.length; j += 1) {
      max = Math.max(max, grid[j][i]);
    }

    sum += max;
  }

  return sum;
};

export default deleteGreatestValue;
