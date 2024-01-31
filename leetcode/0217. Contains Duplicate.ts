function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i += 1) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
