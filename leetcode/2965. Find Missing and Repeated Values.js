const findMissingAndRepeatedValues = (grid) => {
  const len = grid.length;
  const array = grid.flat(2);

  const map = new Map();

  for (const digit of array) {
    map.set(digit, map.get(digit) + 1 || 1);
  }

  const res = [];

  for (let i = 1; i <= len ** 2; i += 1) {
    if (map.get(i) === 2) res[0] = i;
    if (!map.get(i)) res[1] = i;
  }

  return res;
};
