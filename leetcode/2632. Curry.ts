type F = (...args: number[]) => void;

function curry(fn: F): F {
  return function curried(this: void, ...args) {
    if (args.length >= fn.length) {
      return fn.call(this, ...args);
    }

    return function accumulator(this: void, ...nextArgs: number[]) {
      return curried.call(this, ...args, ...nextArgs);
    };
  };
}

export default curry;
