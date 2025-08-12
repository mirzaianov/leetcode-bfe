const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const curr: number = nums[i];
    const val: number | undefined = map.get(target - curr);

    if (val !== undefined) return [val, i];

    map.set(curr, i);
  }

  return [-1, -1];
};

export default twoSum;
