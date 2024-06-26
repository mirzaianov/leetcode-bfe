// var firstMissingPositive = function (nums) {
//   // First, we need to understand that the first missing positive number is less than or equal to n (length of array) except for one case. The explanation is in the above.
//   // We will position every positive integer in the array at its corresponding index
//   // ex) 1 at index 0, 2 at index 1, 3 at index 2
//   // In this way, the array can position all integers that are less than or equal to n at their corresponding indices without changing the size of given array.
//   // Therefore, we can find the first missing positive integer by scanning through the array.

//   for (let i = 0; i < nums.length; i++) {
//     let idx = nums[i] - 1;

//     if (i == idx || nums[i] == nums[idx]) continue; // already positioned or nums[i] is a duplicate

//     if (idx >= 0 && idx <= nums.length - 1) {
//       [nums[i], nums[idx]] = [nums[idx], nums[i]];
//       i--; // check the swapped number
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (i + 1 == nums[i]) continue;
//     else return i + 1; // the next positive number which is i+1 doesn't exist in the array
//   }

//   return nums.length + 1; // the array is [1,2,...,n]
//   // Time Complexity: O(n)
//   // Space Complexity: O(1)
// };

var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let idx = nums[i] - 1;

    if (i == idx || nums[i] == nums[idx]) continue;

    if (idx >= 0 && idx <= nums.length - 1) {
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      i--;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 == nums[i]) continue;
    else return i + 1;
  }

  return nums.length + 1;
};
