// var answerQueries = function (nums, queries) {
//   nums.sort((a, b) => a - b);

//   const prefixSum = [nums[0]];

//   for (let i = 1; i < nums.length; i++) {
//     prefixSum.push(prefixSum[i - 1] + nums[i]);
//   }

//   for (let j = 0; j < queries.length; j++) {
//     queries[j] = binarySearch(prefixSum, 0, prefixSum.length - 1, queries[j]) + 1;
//   }
//   return queries;

//   function binarySearch(arr, left, right, target) {
//     while (right >= left) {
//       let mid = Math.floor((left + right) / 2);

//       if (arr[mid] == target) return mid;

//       if (target < arr[mid]) return binarySearch(arr, left, mid - 1, target);

//       if (target > arr[mid]) return binarySearch(arr, mid + 1, right, target);
//     }

//     return right;
//   }
// };

var answerQueries = function (nums, queries) {
  const arr = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < queries.length; i++) {
    let sum = 0;
    let check = 0;

    for (let j = 0; j < nums.length; j++) {
      sum += nums[j];

      if (sum <= queries[i]) check += 1;
      else break;
    }

    arr.push(check);
  }

  return arr;
};

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21])); // [2, 3, 4]
console.log(answerQueries([2, 3, 4, 5], [1])); // [0]
