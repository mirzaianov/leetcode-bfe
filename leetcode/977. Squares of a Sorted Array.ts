const sortedSquares = (nums: number[]): number[] => {
  const n = nums.length;
  const res: number[] = new Array(n).fill(0);
  let left = 0;
  let right = n - 1;

  for (let i = n - 1; i >= 0; i -= 1) {
    const leftDoubled = nums[left] ** 2;
    const rightDoubled = nums[right] ** 2;

    if (leftDoubled > rightDoubled) {
      res[i] = leftDoubled;
      left += 1;
    } else {
      res[i] = rightDoubled;
      right -= 1;
    }
  }

  return res;
};

export default sortedSquares;
