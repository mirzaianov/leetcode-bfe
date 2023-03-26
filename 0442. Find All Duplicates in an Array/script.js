var findDuplicates = function (nums) {
  const map = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }

  for (let item in map) {
    if (map[item] === 2) result.push(item);
  }

  return result;
};
