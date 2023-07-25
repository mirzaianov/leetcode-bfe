var unequalTriplets = function (nums) {
  const myMap = new Map();

  let len = nums.length;

  for (let i = 0; i < len; i++) {
    myMap.get(nums[i]) ? myMap.set(nums[i], myMap.get(nums[i]) + 1) : myMap.set(nums[i], 1);
  }

  if (myMap.size < 3) return 0;

  let count = 0;
  let prev = 0;

  for (val of [...myMap.values()]) {
    len -= val;
    count += prev * val * len;
    prev += val;
  }

  return count;
};

console.log(unequalTriplets([4, 4, 2, 4, 3])); // 3
console.log(unequalTriplets([1, 1, 1, 1, 1])); // 0
console.log(unequalTriplets([1, 3, 1, 2, 4])); // 7
