function flatten(...stack) {
  const result = [];

  while (stack.length) {
    const el = stack.shift();

    console.log('#1 el >', el);
    console.log('#1 stack >', stack);

    if (Array.isArray(el)) {
      stack.unshift(...el);
      console.log('#2 el >', el);
      console.log('#2 stack >', stack);
      continue;
    }

    result.push(el);

    console.log('result >', result);
  }

  return result;
}

console.log(flatten([1, [2, [[3]]], 4, 5, [6, [7]]]));
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));
