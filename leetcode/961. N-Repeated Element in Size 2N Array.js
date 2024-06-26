var repeatedNTimes = function (nums) {
  const map = new Map();
  const half = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);

    if (map.get(nums[i]) >= half) return nums[i];
  }
};

// console.log(repeatedNTimes([1, 2, 3, 3])); // 3
console.log(repeatedNTimes([2, 1, 1, 5, 3, 2, 2])); // 2
// console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); // 5
