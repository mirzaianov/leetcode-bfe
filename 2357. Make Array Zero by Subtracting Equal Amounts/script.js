var minimumOperations = function (nums) {
  let count = 0;

  while (nums.length > 0) {
    nums = nums.filter(item => item > 0);

    const minValue = Math.min(...nums);

    nums = nums.map(item => item - minValue);

    count++;
  }

  return count - 1;
};
