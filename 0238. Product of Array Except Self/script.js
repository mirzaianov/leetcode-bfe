const productExceptSelf = function (nums) {
  const output = [];
  let leftMult = 1;
  let rightMult = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }

  for (let j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
