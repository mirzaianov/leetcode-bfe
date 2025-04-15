const getNumLength = (num: number): number => {
  if (num === 0) return 1;

  const sign: number = Math.sign(num);
  let division: number = Math.abs(num);
  let count = 0;

  while (division) {
    count += 1;
    division = Math.floor(division / 10);
  }

  return sign && sign < 0 ? count + 1 : count;
};

const findColumnWidth = (grid: number[][]): number[] => {
  if (!grid.length) return [];

  const res: number[] = [];

  for (let j = 0; j < grid[0].length; j += 1) {
    let maxLen = -Infinity;

    for (let i = 0; i < grid.length; i += 1) {
      maxLen = Math.max(maxLen, getNumLength(grid[i][j]));
    }

    res.push(maxLen);
  }

  return res;
};

export default findColumnWidth;
