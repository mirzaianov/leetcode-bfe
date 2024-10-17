const minBitwiseArray = (nums: number[]): number[] => {
  const len: number = nums.length;
  const ans: number[] = new Array(len).fill(-1);

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j <= nums[i]; j += 1) {
      if ((j | (j + 1)) === nums[i]) {
        ans[i] = j;
        break;
      }
    }
  }

  return ans;
};

export default minBitwiseArray;
