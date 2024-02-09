const productExceptSelf = (nums: number[]): number[] => {
  const res: number[] = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i += 1) {
    res[i] = left;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
