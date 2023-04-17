var leftRigthDifference = function (nums) {
  if (nums.length === 1) return [0];

  const left = [],
    right = [],
    result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) left[i] = 0;
    else left[i] = left[i - 1] + nums[i - 1];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) right[i] = 0;
    else right[i] = right[i + 1] + nums[i + 1];
  }

  for (let i = 0; i < left.length; i++) {
    result.push(Math.abs(left[i] - right[i]));
  }

  return result;
};

console.log(leftRigthDifference([10, 4, 8, 3])); // [15,1,11,22]
console.log(leftRigthDifference([1])); // [0]
