// #1

// var subsets = function (nums) {
//   let res = [[]];

//   for (let i = 0; i < nums.length; i++) {
//     const sub = [];

//     for (let j = 0; j < res.length; j++) {
//       sub.push([...res[j], nums[i]]);
//     }

//     res.push(...sub);
//   }

//   return res;
// };

// #2

const subsets = function (nums, depth = 0, subset = [], results = []) {
  if (depth === nums.length) {
    results.push(subset);
  } else {
    subsets(nums, depth + 1, subset, results);
    subsets(nums, depth + 1, [...subset, nums[depth]], results);
  }

  return results;
};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
