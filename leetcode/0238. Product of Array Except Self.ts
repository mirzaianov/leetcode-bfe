const productExceptSelf = (nums: number[]): number[] => {
  const res: number[] = [];
  let left = 1;

  for (let i = 0; i < nums.length; i += 1) {
    res[i] = left;
    left *= nums[i];
  }

  let right = 1;

  for (let i = res.length - 1; i >= 0; i -= 1) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
};

export default productExceptSelf;
