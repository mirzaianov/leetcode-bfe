const leftRightDifference = (nums: number[]): number[] => {
  const len: number = nums.length;
  const leftSum: number[] = Array(len).fill(undefined);
  const rightSum: number[] = Array(len).fill(undefined);

  for (let i = 0; i < len; i += 1) {
    if (i === 0) {
      leftSum[i] = 0;
    } else {
      leftSum[i] = leftSum[i - 1] + nums[i - 1];
    }
  }

  for (let i = len - 1; i >= 0; i -= 1) {
    if (i === len - 1) {
      rightSum[i] = 0;
    } else {
      rightSum[i] = rightSum[i + 1] + nums[i + 1];
    }
  }

  const res: number[] = Array(len).fill(undefined);

  for (let i = 0; i < len; i += 1) {
    res[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return res;
};

export default leftRightDifference;
