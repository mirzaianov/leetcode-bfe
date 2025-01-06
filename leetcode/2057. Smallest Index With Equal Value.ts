const smallestEqual = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i += 1) {
    if (i % 10 === nums[i]) return i;
  }

  return -1;
};

export default smallestEqual;
