const findTargetSumWays = function (nums, target) {
  const memo = {};

  return find(0, 0);

  function find(i, total) {
    const id = i + '-' + total;

    if (id in memo) {
      return memo[id];
    }

    if (i === nums.length) {
      if (total === target) {
        return 1;
      }
      return 0;
    }

    memo[id] = find(i + 1, total + nums[i]) + find(i + 1, total - nums[i]);
    return memo[id];
  }
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5
console.log(findTargetSumWays([1], 1)); // 1
