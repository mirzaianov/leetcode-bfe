// Time O(n^2) | Space O(1)

// const twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// Time O(n) | Space O(n)

// function twoSum(nums, target) {
//     const map = {};

//     for (let i = 0; i < nums.length; i++) {
//         let element = nums[i];
//         let complement = target - element;

//         if (complement in map) {
//             return [map[complement], i];
//         } else {
//             map[element] = i;
//         }
//     }

//     return [];
// }

// #3

function twoSum(nums, target) {
  const store = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const complement = target - element;

    if (complement in store) return [store[complement], i];

    store[element] = i;

    console.log(store);
  }

  return [];
}

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
// console.log(twoSum([3, 3], 6)); // [0, 1]
