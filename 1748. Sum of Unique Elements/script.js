// var sumOfUnique = function(nums) {
//     let map = {};
//     let res = 0;

//     for (let i = 0; i < nums.length; i++) {
//         map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
//     }

//     for (item in map) {
//         if (map[item] === 1) res += +item;
//     }

//     return res;
// };

// var sumOfUnique = function (nums) {
//   let map = new Map();
//   let res = 0;

//   for (item of nums) {
//     if (!map.has(item)) map.set(item, 1);
//     else map.set(item, map.get(item) + 1);
//   }

//   for (let [key, value] of map.entries()) {
//     if (value === 1) res += key;
//   }

//   return res;
// };

var sumOfUnique = function (nums) {
  let map = new Map();
  let res = 0;

  for (item of nums) {
    if (!map.has(item)) {
      map.set(item, 1);
      res += item;
    } else if (map.get(item) === 1) {
      res -= item;
      map.set(item, 0);
    }
  }

  return res;
};

console.log(sumOfUnique([1, 2, 3, 2])); // 4
console.log(sumOfUnique([1, 1, 1, 1, 1])); // 0
console.log(sumOfUnique([1, 2, 3, 4, 2, 5])); // 15
