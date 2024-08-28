const specialArray = (nums: number[]): number => {
  for (let i = nums.length; i >= 1; i -= 1) {
    let count = 0;

    for (let j = 0; j < nums.length; j += 1) {
      if (nums[j] >= i) count += 1;
    }

    if (i === count) return i;
  }

  return -1;
};

export default specialArray;
