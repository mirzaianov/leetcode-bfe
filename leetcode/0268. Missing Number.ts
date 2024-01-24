const missingNumber = (nums: number[]): number => {
  const len: number = nums.length;
  const fullSum = (len * (len + 1)) / 2;
  const currSum = nums.reduce((acc: number, item: number) => acc + item, 0);

  return fullSum - currSum;
};
