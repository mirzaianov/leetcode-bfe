const removeElement = (nums: number[], val: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      right -= 1;
    } else {
      left += 1;
    }
  }

  return left;
};

// console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
