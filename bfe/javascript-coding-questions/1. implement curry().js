function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.call(this, ...args);
    }

    return function accumulator(...missingArgs) {
      return curried.call(this, ...args, ...missingArgs);
    };
  };
}

export default curry;
