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
