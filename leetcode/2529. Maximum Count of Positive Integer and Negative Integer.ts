const binarySearch = (array: number[], target: number): number => {
  let l = 0;
  let r: number = array.length;

  while (l < r) {
    const m: number = l + Math.floor((r - l) / 2);

    if (array[m] < target) l = m + 1;
    if (array[m] >= target) r = m;
  }

  return l;
};

const maximumCount = (nums: number[]): number => {
  const neg = binarySearch(nums, 0);
  const pos = nums.length - binarySearch(nums, 1);

  return Math.max(neg, pos);
};

export default maximumCount;
