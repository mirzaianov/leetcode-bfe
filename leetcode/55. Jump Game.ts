const canJump = (nums: number[]): boolean => {
  const len: number = nums.length;
  let goal: number = len - 1;

  for (let i = len - 1; i >= 0; i -= 1) {
    if (i + nums[i] >= goal) goal = i;
  }

  return goal === 0;
};

export default canJump;
