const findChampion = (grid: number[][]): number => {
  let strongest = 0;
  let max = 0;

  for (let i = 0; i < grid.length; i += 1) {
    const curr: number = grid[i].reduce((acc, item) => acc + item, 0);

    if (curr > max) {
      strongest = i;
      max = curr;
    }
  }

  return strongest;
};

export default findChampion;
