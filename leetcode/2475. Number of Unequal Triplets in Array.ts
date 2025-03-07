const unequalTriplets = (nums: number[]): number => {
  const len: number = nums.length;
  let count = 0;

  for (let i = 0; i < len - 2; i += 1) {
    for (let j = i + 1; j < len - 1; j += 1) {
      for (let k = j + 1; k < len; k += 1) {
        if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[k] !== nums[i]) {
          count += 1;
        }
      }
    }
  }

  return count;
};

export default unequalTriplets;
