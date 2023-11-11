var subsetXORSum = function (nums) {
  let sum = 0;
  dfs(0, 0);

  return sum;

  function dfs(val, i) {
    if (i < nums.length) {
      dfs(val ^ nums[i], i + 1);
      dfs(val, i + 1);
    }
    if (i == nums.length) {
      sum += val;
    }
  }
};

console.log(subsetXORSum([1, 3])); // 6
console.log(subsetXORSum([5, 1, 6])); // 28
console.log(subsetXORSum([3, 4, 5, 6, 7, 8])); // 480
