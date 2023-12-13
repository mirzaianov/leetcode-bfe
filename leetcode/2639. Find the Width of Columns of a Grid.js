const findColumnWidth = (grid) => {
  const res = [];

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      const len = String(grid[i][j]).length;

      len > (res[j] || -Infinity) ? (res[j] = len) : null;
    }
  }

  return res;
};
