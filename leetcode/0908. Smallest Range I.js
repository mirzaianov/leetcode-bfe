const smallestRangeI = (nums, k) => {
  const diff = Math.max(...nums) - Math.min(...nums) - 2 * k;

  return diff > 0 ? diff : 0;
};
