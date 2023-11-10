const findChampion = (grid) => {
  let max = -Infinity;
  let res = -1;

  grid.forEach((item, index) => {
    const ones = item.reduce((acc, val) => acc + val, 0);

    if (ones > max) {
      res = index;
      max = ones;
    }
  });

  return res;
};
