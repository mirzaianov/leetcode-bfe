const minSubsequence = (nums: number[]): number[] => {
  const sortedNums: number[] = nums.sort((a, b) => b - a);
  let i = 0;
  let leftSum = 0;
  let rightSum = sortedNums.reduce((acc, item) => acc + item, 0);

  while (leftSum <= rightSum) {
    const curr: number = sortedNums[i];

    leftSum += curr;
    rightSum -= curr;
    i += 1;
  }

  return sortedNums.slice(0, i);
};

export default minSubsequence;
