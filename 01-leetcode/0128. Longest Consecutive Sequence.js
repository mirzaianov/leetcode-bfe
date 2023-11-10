const longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;

  for (let n of set) {
    if (!set.has(n - 1)) {
      let count = 0;

      while (set.has(n++)) count++;

      max = Math.max(count, max);
    }
  }

  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
