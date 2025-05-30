const countHillValley = (nums: number[]): number => {
  const n: number = nums.length;

  if (n < 3) return 0;

  let count = 0;
  let l = 0;
  let m = 1;
  let r = 2;

  while (r < n) {
    const prev: number = nums[l];
    const curr: number = nums[m];
    const next: number = nums[r];

    if ((prev < curr && curr > next) || (prev > curr && curr < next)) {
      count += 1;
      l = m;
      m = r;
      r += 1;
    } else if (curr === next) {
      m = r;
      r += 1;
    } else {
      l = m;
      m = r;
      r += 1;
    }
  }

  return count;
};

export default countHillValley;
