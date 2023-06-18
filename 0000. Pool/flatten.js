function flattenMax(arr) {
  //  return Math.max(...arr.flat());
  let res = [];
  let max = -Infinity;

  while (arr.length) {
    if (!Array.isArray(arr[0])) {
      res.push(arr[0]);
      max = Math.max(max, arr[0]);
      arr.shift(arr[0]);
    }

    if (Array.isArray(arr[0])) {
      const curr = arr.shift();
      arr.unshift(...curr);
    }
  }

  return max;
}

console.log(
  flattenMax([
    [3, [1]],
    [
      [2, 6],
      [4, 8],
    ],
  ])
); // 8
