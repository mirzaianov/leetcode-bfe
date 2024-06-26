const thirdMax = (nums: number[]): number => {
  const set = new Set<number>(nums);
  const max: number[] = Array(3).fill(-Infinity);

  for (const num of set) {
    if (num > max[2]) {
      max[0] = max[1];
      max[1] = max[2];
      max[2] = num;
    }

    if (num < max[2] && num > max[1]) {
      max[0] = max[1];
      max[1] = num;
    }

    if (num < max[1] && num > max[0]) {
      max[0] = num;
    }
  }

  if (set.size < 3) return max[2];

  return max[0];
};
