/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, item) => item(acc), x);
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

const fn2 = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn2(4)); // 65
