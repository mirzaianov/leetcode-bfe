const minPairSum = (nums: number[]): number => {
  const sorted: number[] = [...nums].sort((a, b) => a - b);
  let max = -Infinity;
  let l = 0;
  let r: number = sorted.length - 1;

  while (l <= r) {
    const curr: number = sorted[l] + sorted[r];

    max = Math.max(max, curr);

    l += 1;
    r -= 1;
  }

  return max;
};

export default minPairSum;
