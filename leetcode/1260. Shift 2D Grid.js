const shiftGrid = (grid, k) => {
  const len = grid[0].length;
  const flatened = grid.flat(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < k; i += 1) {
    const last = flatened.pop();

    flatened.unshift(last);
  }

  const res = [];

  for (let i = 0; i < flatened.length; i += len) {
    const subgrid = flatened.slice(i, i + len);

    res.push(subgrid);
  }

  return res;
};
