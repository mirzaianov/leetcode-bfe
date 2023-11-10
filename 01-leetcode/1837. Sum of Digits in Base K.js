var sumBase = function (n, k) {
  return n
    .toString(k)
    .split('')
    .reduce((acc, item) => acc + +item, 0);
};

console.log(sumBase(34, 6)); // 9
console.log(sumBase(10, 10)); // 1
