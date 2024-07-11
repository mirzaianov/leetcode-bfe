const helper = (nums: number[]): number => {
  let rob1 = 0;
  let rob2 = 0;

  for (const num of nums) {
    const temp: number = Math.max(rob1 + num, rob2);

    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
};

const rob = (nums: number[]): number => {
  const first: number[] = nums.slice(0, nums.length - 1);
  const second: number[] = nums.slice(1);

  return Math.max(nums[0], helper(first), helper(second));
};

export default rob;
