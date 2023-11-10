const findTheArrayConcVal = function (nums) {
  let res = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const leftVal = nums[left];
    const rightVal = nums[right];

    left === right ? (res += leftVal) : (res += +(leftVal.toString() + rightVal.toString()));

    left += 1;
    right -= 1;
  }

  return res;
};
