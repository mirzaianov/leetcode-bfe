const search = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const curr = nums[mid];

    if (curr === target) return mid;

    if (curr < target) left = mid + 1;

    if (curr > target) right = mid - 1;
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
