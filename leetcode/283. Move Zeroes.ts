const moveZeroes = (nums: number[]): void => {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    if (nums[r] !== 0) {
      [nums[r], nums[l]] = [nums[l], nums[r]];
      l += 1;
    }

    r += 1;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 1])); // [1, 0 ,0]
