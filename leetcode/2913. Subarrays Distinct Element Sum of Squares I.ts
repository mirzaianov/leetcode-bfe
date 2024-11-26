const sumCounts = (nums: number[]): number => {
  const len: number = nums.length;
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j <= len; j += 1) {
      count += new Set<number>(nums.slice(i, j)).size ** 2;
    }
  }

  return count;
};

export default sumCounts;
