const minMaxGame = (nums: number[]): number => {
  const n: number = nums.length;

  if (!n) return 0;

  if (n === 1) return nums[0];

  const newNums: number[] = [];

  for (let i = 0; i < n / 2; i += 1) {
    if (i % 2 === 0) {
      newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
    } else {
      newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
    }
  }

  return minMaxGame(newNums);
};

export default minMaxGame;
