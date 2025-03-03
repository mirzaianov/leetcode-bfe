const sortArrayByParityII = (nums: number[]): number[] => {
  const len: number = nums.length;
  let even = 0;
  let odd: number = len - 1;

  while (even < len) {
    if (nums[even] % 2 === 0) {
      even += 2;
    } else {
      [nums[even], nums[odd]] = [nums[odd], nums[even]];
      odd -= 2;
    }
  }

  return nums;
};

export default sortArrayByParityII;
