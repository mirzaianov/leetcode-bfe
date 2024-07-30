const isArraySpecial = (nums: number[]): boolean => {
  if (nums.length < 2) return true;

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (
      (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) ||
      (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0)
    )
      return false;
  }

  return true;
};

export default isArraySpecial;
