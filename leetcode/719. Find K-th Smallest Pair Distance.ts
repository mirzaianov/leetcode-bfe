const numDifferences = (nums: number[], difference: number): number => {
  let l = 0;
  let r = 0;
  let count = 0;

  while (l < nums.length - 1) {
    while (r < nums.length && nums[r] - nums[l] <= difference) {
      r += 1;
    }

    count += r - l - 1;
    l += 1;
  }

  return count;
};

const smallestDistancePair = (nums: number[], k: number) => {
  const sortedNums: number[] = [...nums].sort((a, b) => a - b);

  let l = 0;
  let r: number = sortedNums[sortedNums.length - 1] - sortedNums[0];

  while (l < r) {
    const m: number = l + Math.floor((r - l) / 2);
    const count: number = numDifferences(sortedNums, m);

    if (count < k) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
};

export default smallestDistancePair;
