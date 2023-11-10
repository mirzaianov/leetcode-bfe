// const xorOperation = function (n, start) {
//   let nums = [];

//   nums[0] = start;

//   for (let i = 1; i < n; i++) {
//     nums[i] = nums[i - 1] + 2;
//   }

//   return nums.reduce((a, b) => a ^ b);
// };

const xorOperation = function (n, start) {
  let xor = start;

  for (let i = 1; i < n; i++) {
    xor ^= start + i * 2;
  }

  return xor;
};
