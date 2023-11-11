// const numIdenticalPairs = function (nums) {
//   let index = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] == nums[j] && i < j) {
//         index++;
//       }
//     }
//   }
//   return index;
// };

// #2

const numIdenticalPairs = function (nums) {
  const map = new Map();
  let count = 0;

  for (let num of nums) {
    if (map.has(num)) {
      count += map.get(num);
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
