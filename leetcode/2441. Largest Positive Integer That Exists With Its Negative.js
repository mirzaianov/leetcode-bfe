const findMaxK = (nums) => {
  const set = new Set();
  let max = -1;

  for (const num of nums) {
    if (set.has(-1 * num)) max = Math.max(max, Math.abs(num));

    set.add(num);
  }

  return max;
};
