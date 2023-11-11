// const productExceptSelf = function (nums) {
//   const output = [];
//   let leftMult = 1;
//   let rightMult = 1;

//   for (let i = nums.length - 1; i >= 0; i--) {
//     output[i] = rightMult;
//     rightMult *= nums[i];
//   }

//   console.log(output);

//   for (let j = 0; j < nums.length; j++) {
//     output[j] *= leftMult;
//     leftMult *= nums[j];
//   }

//   return output;
// };

// #2

const productExceptSelf = function (nums) {
  const res = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = left;
    left = left * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * right;
    right = right * nums[i];
  }

  return res;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
