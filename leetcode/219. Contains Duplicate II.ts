const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const set = new Set<number>();
  let left: number = 0;
  let right: number = 0;

  while (right < nums.length) {
    if (set.has(nums[right])) return true;

    set.add(nums[right]);

    if (right - left === k) {
      set.delete(nums[left]);
      left += 1;
    }

    right += 1;
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
