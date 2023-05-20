// var combinationSum = function (candidates, target) {
//   const result = [];

//   permute();

//   return result;

//   function permute(arr = [], sum = 0, idx = 0) {
//     if (sum === target) {
//       result.push(arr);
//       return;
//     }
//     for (let i = idx; i < candidates.length; i++) {
//       if (sum + candidates[i] <= target) {
//         permute([...arr, candidates[i]], sum + candidates[i], i);
//       }
//     }
//   }
// };

var combinationSum = function (candidates, target, start = 0, sum = 0, combination = [], res = []) {
  if (sum > target) {
    return null;
  }

  if (sum === target) {
    res.push([...combination]);
  }

  for (let i = start; i < candidates.length; i++) {
    combination.push(candidates[i]);
    combinationSum(candidates, target, i, sum + candidates[i], combination, res);
    combination.pop(candidates[i]);
  }

  return res;
};
