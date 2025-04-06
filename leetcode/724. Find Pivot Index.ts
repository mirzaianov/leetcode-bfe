const pivotIndex = (nums: number[]): number => {
  let leftSum = 0;
  let rightSum: number = nums.reduce((acc, item) => acc + item, 0);

  for (let i = 0; i < nums.length; i += 1) {
    const curr: number = nums[i];

    rightSum -= curr;

    if (leftSum === rightSum) return i;

    leftSum += curr;
  }

  return -1;
};

export default pivotIndex;
