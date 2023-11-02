// function flattenMax(arr) {
//   //  return Math.max(...arr.flat());
//   let res = [];
//   let max = -Infinity;

//   while (arr.length) {
//     if (!Array.isArray(arr[0])) {
//       res.push(arr[0]);
//       max = Math.max(max, arr[0]);
//       arr.shift(arr[0]);
//     }

//     if (Array.isArray(arr[0])) {
//       const curr = arr.shift();
//       arr.unshift(...curr);
//     }
//   }

//   return max;
// }

// console.log(
//   flattenMax([
//     [3, [1]],
//     [
//       [2, 6],
//       [4, 8],
//     ],
//   ])
// ); // 8

// #2

// function flat(arr, depth = 1) {
//   const res = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (Array.isArray(arr[i]) && depth > 0) {
//       res.push(...flat(arr[i], depth - 1));
//     } else {
//       res.push(arr[i]);
//     }
//   }

//   return res;
// }

function flat(arr, depth = 1) {
  const result = [];
  const stack = arr.map((item) => [item, depth]);

  while (stack.length) {
    const [item, itemDepth] = stack.pop();

    if (Array.isArray(item) && itemDepth > 0) {
      stack.push(...item.map((arrayItem) => [arrayItem, itemDepth - 1]));
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}

const arr = [1, [2], [3, [4]]];

// console.log(flat(arr)); // [1, 2, 3, [4]]

console.log(flat(arr, 1)); // [1, 2, 3, [4]]

// console.log(flat(arr, 2)); // [1, 2, 3, 4]
