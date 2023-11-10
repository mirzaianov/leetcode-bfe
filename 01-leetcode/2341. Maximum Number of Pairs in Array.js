// var numberOfPairs = function (nums) {
//   const map = new Map();
//   let count = 0;
//   let digit = 0;

//   for (let i = 0; i < nums.length; i++) {
//     map[nums[i]] = map[nums[i]] + 1 || 1;
//   }

//   for (let item in map) {
//     if (map[item] % 2 === 0) {
//       count += map[item] / 2;
//     } else {
//       if (map[item] / 2 > 1) {
//         count += Math.floor(map[item] / 2);
//         digit++;
//       } else {
//         digit++;
//       }
//     }
//   }

//   return [count, digit];
// };

// var numberOfPairs = function (nums) {
//   let countPairs = [];
//   let countNoPairs = [];

//   nums = nums.sort((a, b) => a - b);

//   while (nums.length > 0) {
//     if (nums[0] === nums[1]) {
//       countPairs.push(nums.shift());
//       countPairs.push(nums.shift());
//     } else {
//       countNoPairs.push(nums.shift());
//     }
//   }

//   return [countPairs.length / 2, countNoPairs.length];
// };

var numberOfPairs = function (nums) {
  const obj = {};
  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      delete obj[nums[i]];
      pairs++;
    } else {
      obj[nums[i]] = 1;
    }
  }

  return [pairs, Object.values(obj).length];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2])); // [3,1]
// console.log(numberOfPairs([1, 1])); // [1,0]
// console.log(numberOfPairs([0])); // [0,1]
