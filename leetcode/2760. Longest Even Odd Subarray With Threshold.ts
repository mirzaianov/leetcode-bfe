const longestAlternatingSubarray = (nums: number[], threshold: number): number => {
  let counter: number = -1;
  let index: number = -1;

  for (let i: number = 0; i < nums.length; i += 1) {
    console.log(`1 >> i: ${i}, index: ${index}, counter: ${counter}`);
    if (index === -1 && nums[i] % 2 === 0) index = i;
    if (nums[i] > threshold) index = -1;
    if (index >= 0) counter = Math.max(i - index, counter);
    if (i < nums.length - 1 && nums[i] % 2 === nums[i + 1] % 2) index = -1;
    console.log(`2 >> i: ${i}, index: ${index}, counter: ${counter}`);
  }

  return counter + 1;
};

console.log(longestAlternatingSubarray([3, 2, 5, 4], 5)); // 3
console.log(longestAlternatingSubarray([1, 2], 2)); // 1
console.log(longestAlternatingSubarray([2, 3, 4, 5], 4)); // 3
