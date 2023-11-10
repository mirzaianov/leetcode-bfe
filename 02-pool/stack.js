function flatten(...stack) {
  const result = [];

  while (stack.length) {
    const el = stack.shift();

    if (Array.isArray(el)) {
      stack.unshift(...el);
      continue;
    }

    result.push(el);
  }

  return result;
}

console.log(flatten([1, [2, [[3]]], 4, 5, [6, [7]]]));
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));
