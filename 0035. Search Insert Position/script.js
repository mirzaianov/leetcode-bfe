const searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let midValue = nums[mid];

    if (midValue < target) left = mid + 1;
    else right = mid;
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1, 3], 2)); // 1
