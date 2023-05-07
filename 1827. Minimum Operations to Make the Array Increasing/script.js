// var minOperations = function(nums) {
//   if (nums.length <= 1) return 0;

//   let count = 0;
//   let i = 1;

//   while (nums[i]) {
//       if (nums[i] <= nums[i - 1]) {
//           do {
//               nums[i]++;
//               count++;
//           } while (nums[i] <= nums[i - 1]);
//       }

//       i++;
//   }

//   return count;
// };

var minOperations = function (nums) {
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      count += nums[i - 1] - nums[i] + 1;
      nums[i] = nums[i - 1] + 1;
    }
  }

  return count;
};

console.log(minOperations([1, 1, 1])); // 3
console.log(minOperations([1, 5, 2, 4, 1])); // 14
console.log(minOperations([8])); // 0
