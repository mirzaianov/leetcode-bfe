// const arithmeticTriplets = function (nums, diff) {
//     let arr = [];

//     for (let i = 0; i <= nums.length - 3; i++) {
//         for (let j = i + 1; j <= nums.length - 2; j++) {
//             for (let k = j + 1; k <= nums.length - 1; k++) {
//                 if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
//                     arr.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }
//     }

//     return arr.length;
// };

// const arithmeticTriplets = function (nums, diff) {
//     let count = 0;

//     for (let i of nums) {
//         if (nums.includes(i + diff) && nums.includes(i + diff * 2)) {
//             count++;
//         }
//     }

//     return count;
// };

// #2

var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  const set = new Set(nums);

  for (const num of nums) {
    if (set.has(num + diff) && set.has(num + 2 * diff)) count++;
  }

  return count;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)); // 2
