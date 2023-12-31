function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.call(this, ...args);
    }

    return function (...missingArgs) {
      return curried.call(this, ...args, ...missingArgs);
    };
  };
}

const curriedJoin = curry(curry);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'

console.log(curriedJoin(1)(2, 3)); // '1_2_3'

console.log(curriedJoin(1, 2)(3)); // '1_2_3'
