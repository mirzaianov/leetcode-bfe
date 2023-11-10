// function bigSum(arr1, arr2) {
//   const res = [];

//   for (let i = arr1.length - 1; i >= 0; i--) {
//     const val = arr1[i] + arr2[i];

//     if (val > 9) {
//       const extra = val % 10;

//       res.unshift(extra);

//       arr1[i - 1]++;

//       if (i === 0) {
//         res.unshift('1');
//       }
//     } else {
//       res.unshift(val);
//     }
//   }

//   return res.join('');
// }

// console.log(bigSum([1, 2, 3], [4, 5, 6])); // 579
// console.log(bigSum([5, 4, 4], [4, 5, 6])); // 1000

function bigSum(arr1, arr2) {
  const res = [];

  let i = arr1.length - 1;
  let j = arr2.length - 1;

  while (arr1[i] || arr2[j]) {
    const val = (arr1[i] ? arr1[i] : 0) + (arr2[j] ? arr2[j] : 0);

    if (val > 9) {
      const extra = val % 10;

      if (j === 0 && i === 0) {
        res.unshift(val);
      } else {
        res.unshift(extra);
      }

      if (arr2[j]) {
        arr2[j - 1]++;
      }
    } else {
      res.unshift(val);
    }

    i--;
    j--;
  }

  return res.join('');
}

console.log(bigSum([1, 2, 3, 5, 0], [4, 5, 6])); // 1691
console.log(bigSum([5, 4, 4], [4, 5, 6, 5])); // 5109
console.log(bigSum([1, 2, 3], [4, 5, 6])); // 579
console.log(bigSum([5, 4, 4], [4, 5, 6])); // 1000

function maxNumbers(nums, k) {
  const store = {};

  for (let i = 0; i < nums.length; i++) {
    store[nums[i]] = store[nums[i]] ? store[nums[i]] + 1 : 1;
  }

  const values = Object.entries(store);

  values.sort((a, b) => b[1] - a[1]);

  return maxKValues(values, k);

  function maxKValues(array, number) {
    const result = [];

    for (let i = 0; i < number; i++) {
      result.push(+array[i][0]);
    }

    return result;
  }
}

console.log(maxNumbers([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
