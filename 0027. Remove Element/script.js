const removeElement = function (nums, val) {
  let store = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[store] = nums[i];
      store++;
    }
  }
  return store;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
