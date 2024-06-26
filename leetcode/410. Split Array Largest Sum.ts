const canSplit = (largest: number, array: number[], target: number): boolean => {
  let subArray: number = 0;
  let currSum: number = 0;

  for (const item of array) {
    currSum += item;

    if (currSum > largest) {
      subArray += 1;
      currSum = item;
    }
  }

  return subArray + 1 <= target;
};

const splitArray = (nums: number[], k: number): number => {
  let l = Math.max(...nums);
  let r = nums.reduce((a, b) => a + b, 0);
  let res = r;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);

    if (canSplit(m, nums, k)) {
      res = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return res;
};

export default splitArray;
