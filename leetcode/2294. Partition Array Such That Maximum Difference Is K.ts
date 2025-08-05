const partitionArray = (nums: number[], k: number): number => {
  if (nums.length < 2) return nums.length;

  const sorted: number[] = [...nums].sort((a, b) => a - b);
  let count = 0;
  let l = 0;
  let r = 0;

  while (r < sorted.length) {
    if (sorted[r] - sorted[l] > k) {
      count += 1;
      l = r;
    }

    r += 1;
  }

  return count + 1;
};

export default partitionArray;
