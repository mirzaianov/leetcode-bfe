const swap = (arr: number[], i: number, j: number): void => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const sortColors = (nums: number[]): void => {
  let l = 0;
  let r = nums.length - 1;
  let cur = l;

  while (cur <= r) {
    if (nums[cur] === 0) {
      swap(nums, l, cur);
      l += 1;
      cur += 1;
    } else if (nums[cur] === 2) {
      swap(nums, r, cur);
      r -= 1;
    } else {
      cur += 1;
    }
  }
};

export default sortColors;
