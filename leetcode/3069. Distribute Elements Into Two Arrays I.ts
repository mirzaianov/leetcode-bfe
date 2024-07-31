const resultArray = (nums: number[]): number[] => {
  const arr1: number[] = [nums[0]];
  const arr2: number[] = [nums[1]];

  for (let i = 2; i < nums.length; i += 1) {
    arr1.at(-1) > arr2.at(-1) ? arr1.push(nums[i]) : arr2.push(nums[i]);
  }

  return [...arr1, ...arr2];
};

export default resultArray;
