const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const complement = target - current;

    if (map.has(complement)) return [map.get(complement)!, i];

    map.set(current, i);
  }

  return [-1, -1];
};

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
// console.log(twoSum([3, 3], 6)); // [0, 1]
