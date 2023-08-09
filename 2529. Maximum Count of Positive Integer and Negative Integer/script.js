// var maximumCount = function (nums) {
//   let posCount = 0;
//   let negCount = 0;

//   for (let num of nums) {
//     if (num > 0) posCount++;
//     if (num < 0) negCount++;
//   }

//   return Math.max(posCount, negCount);
// };

// #2

var maximumCount = function (nums) {
  let neg = binary(nums, 0);
  let pos = nums.length - binary(nums, 1);

  return Math.max(neg, pos);

  function binary(array, target) {
    let left = 0;
    let right = array.length;

    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);

      if (array[mid] < target) left = mid + 1;
      else right = mid;
    }

    return left;
  }
};

console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
console.log(maximumCount([5, 20, 66, 1314])); // 4
