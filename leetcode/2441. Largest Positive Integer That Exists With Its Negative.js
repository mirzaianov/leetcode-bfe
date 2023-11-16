const findMaxK = (nums) => {
  const set = new Set();
  let max = -Infinity;

  for (const num of nums) {
    if (set.has(-1 * num)) max = Math.max(max, Math.abs(num));

    set.add(num);
  }

  if (max === -Infinity) return -1;

  return max;
};
