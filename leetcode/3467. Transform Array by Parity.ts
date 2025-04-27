const transformArray = (nums: number[]): number[] => {
  const len: number = nums.length;
  const res: number[] = [];
  let l = 0;
  let r: number = len - 1;

  for (const n of nums) {
    if (n & 1) {
      res[r] = 1;
      r -= 1;
    } else {
      res[l] = 0;
      l += 1;
    }
  }

  return res;
};

export default transformArray;
