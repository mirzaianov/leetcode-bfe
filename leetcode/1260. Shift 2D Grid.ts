const shiftGrid = (grid: number[][], k: number): number[][] => {
  const m: number = grid[0].length;
  const nums: number[] = grid.flat(1);

  for (let i = 0; i < k; i += 1) {
    const last: number | undefined = nums.pop();

    if (last !== undefined) {
      nums.unshift(last);
    }
  }

  const res: number[][] = [];

  for (let i = 0; i < nums.length; i += m) {
    const sub: number[] = nums.slice(i, i + m);

    res.push(sub);
  }

  return res;
};

export default shiftGrid;
