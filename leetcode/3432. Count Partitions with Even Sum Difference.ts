const countPartitions = (nums: number[]): number => {
  let leftSum = nums[0];
  let rightSum: number = nums.reduce((acc, item) => acc + item, 0) - leftSum;
  let count = 0;

  for (let i = 1; i < nums.length; i += 1) {
    const curr: number = nums[i];
    const diff: number = leftSum - rightSum;

    if (diff % 2 === 0) count += 1;

    leftSum += curr;
    rightSum -= curr;
  }

  return count;
};

export default countPartitions;
